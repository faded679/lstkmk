import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function disposeMeshResources(obj) {
  obj.traverse((node) => {
    if (node.geometry) node.geometry.dispose();
    if (node.material) {
      const mats = Array.isArray(node.material) ? node.material : [node.material];
      for (const m of mats) {
        if (m.map) m.map.dispose();
        m.dispose();
      }
    }
  });
}

const PANEL_W_M = 1.0;
const PANEL_H_M = 0.5;
const TEX_PPM = 320;
const RIB_PITCH_MM = 44;

function createSandwichPanelTexture(hexColor, options = {}) {
  const moduleW = options.moduleW ?? PANEL_W_M;
  const moduleH = options.moduleH ?? PANEL_H_M;
  const pxPerMeter = options.pxPerMeter ?? TEX_PPM;
  const ribPitchMm = options.ribPitchMm ?? RIB_PITCH_MM;
  const seamMm = options.seamMm ?? 28;

  const w = Math.max(128, Math.round(pxPerMeter * moduleW));
  const h = Math.max(128, Math.round(pxPerMeter * moduleH));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");

  const r = (hexColor >> 16) & 255;
  const g = (hexColor >> 8) & 255;
  const b = hexColor & 255;

  const face = `rgb(${r}, ${g}, ${b})`;
  const faceHi = `rgb(${Math.min(255, r + 14)}, ${Math.min(255, g + 14)}, ${Math.min(255, b + 14)})`;
  const groove = `rgb(${Math.max(0, r - 28)}, ${Math.max(0, g - 28)}, ${Math.max(0, b - 28)})`;

  ctx.fillStyle = face;
  ctx.fillRect(0, 0, w, h);

  const ribPitchPx = Math.max(3, Math.round((ribPitchMm / 1000) * pxPerMeter));
  const flatPx = Math.max(2, Math.round(ribPitchPx * 0.86));
  const groovePx = Math.max(1, ribPitchPx - flatPx);

  for (let y = 0; y < h + ribPitchPx; y += ribPitchPx) {
    const flatY = y;
    const grad = ctx.createLinearGradient(0, flatY, 0, flatY + flatPx);
    grad.addColorStop(0, faceHi);
    grad.addColorStop(0.35, face);
    grad.addColorStop(1, `rgb(${Math.max(0, r - 6)}, ${Math.max(0, g - 6)}, ${Math.max(0, b - 6)})`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, flatY, w, flatPx);

    const grooveY = flatY + flatPx;
    ctx.fillStyle = "rgba(0,0,0,0.12)";
    ctx.fillRect(0, grooveY - 1, w, 1);
    ctx.fillStyle = groove;
    ctx.fillRect(0, grooveY, w, groovePx);
  }

  const seamPx = Math.max(3, Math.round((seamMm / 1000) * pxPerMeter));
  const seamX = w - seamPx;
  const seamR = Math.max(0, r - 22);
  const seamG = Math.max(0, g - 22);
  const seamB = Math.max(0, b - 22);
  ctx.fillStyle = `rgb(${seamR}, ${seamG}, ${seamB})`;
  ctx.fillRect(seamX, 0, seamPx, h);
  ctx.fillStyle = "rgba(0,0,0,0.18)";
  ctx.fillRect(seamX - 1, 0, 1, h);
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, 1, h);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

function createSandwichTexture(hexColor) {
  return createSandwichPanelTexture(hexColor, {
    moduleW: PANEL_W_M,
    moduleH: PANEL_H_M,
    ribPitchMm: RIB_PITCH_MM,
    seamMm: 28,
  });
}

function createRoofTexture(hexColor) {
  return createSandwichPanelTexture(hexColor, {
    moduleW: 1.0,
    moduleH: 0.45,
    ribPitchMm: 40,
    seamMm: 24,
  });
}

function createSandwichMaterial(wallColor, widthM, heightM, offsetX = 0, offsetY = 0) {
  const map = createSandwichTexture(wallColor);
  map.repeat.set(widthM / PANEL_W_M, heightM / PANEL_H_M);
  map.offset.set(offsetX % 1, offsetY % 1);
  map.needsUpdate = true;
  return new THREE.MeshStandardMaterial({
    map,
    color: 0xffffff,
    roughness: 0.62,
    metalness: 0.32,
    side: THREE.DoubleSide,
  });
}

function createRoofMaterial(roofColor, repeatX, repeatY) {
  const map = createRoofTexture(roofColor);
  map.repeat.set(repeatX / 1.0, repeatY / 0.45);
  map.needsUpdate = true;
  return new THREE.MeshStandardMaterial({
    map,
    color: 0xffffff,
    roughness: 0.6,
    metalness: 0.34,
    side: THREE.DoubleSide,
  });
}

export class ConfiguratorScene {
  constructor(container, onReady, onWindowsChange, onWindowSelect, onGateChange, onGateSelect, onDoorChange, onDoorSelect) {
    this.container = container;
    this.onReady = onReady;
    this.onWindowsChange = onWindowsChange;
    this.onWindowSelect = onWindowSelect;
    this.onGateChange = onGateChange;
    this.onGateSelect = onGateSelect;
    this.onDoorChange = onDoorChange;
    this.onDoorSelect = onDoorSelect;
    this.animationId = null;
    this.sceneRef = null;
    this._params = null;
    this._craneMobileGroup = null;
    this._craneAnimStart = performance.now();
    this._raycaster = new THREE.Raycaster();
    this._pointer = new THREE.Vector2();
    this._dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this._dragHit = new THREE.Vector3();
    this._drag = null;
    this._init();
  }

  _init() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfafafa);
    scene.fog = new THREE.FogExp2(0xfafafa, 0.00035);

    const w = Math.max(this.container.clientWidth, 1);
    const h = Math.max(this.container.clientHeight, 500);

    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    camera.position.set(18 * 0.8, 5 * 1.5, 36 * 0.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.12;
    controls.rotateSpeed = 0.45;
    controls.zoomSpeed = 0.65;
    controls.panSpeed = 0.55;
    controls.minDistance = 10;
    controls.maxDistance = 300;
    controls.maxPolarAngle = Math.PI / 2 - 0.02;
    controls.target.set(0, 5 / 2, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff8e7, 1.6);
    sunLight.position.set(60, 80, 30);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 4096;
    sunLight.shadow.mapSize.height = 4096;
    sunLight.shadow.bias = -0.0001;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 500;
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x4a90e2, 0.4);
    rimLight.position.set(-50, 30, -50);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0x94a3b8, 0.2);
    fillLight.position.set(-30, 20, 60);
    scene.add(fillLight);

    const grassGeo = new THREE.PlaneGeometry(400, 400);
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x7cb87a, roughness: 0.9, metalness: 0 });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.receiveShadow = true;
    scene.add(grass);

    const asphaltW = 18 * 1.8 + 20;
    const asphaltL = 36 * 1.3 + 20;
    const asphaltGeo = new THREE.PlaneGeometry(asphaltW, asphaltL);
    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x8a9ba8, roughness: 0.95, metalness: 0 });
    const asphalt = new THREE.Mesh(asphaltGeo, asphaltMat);
    asphalt.rotation.x = -Math.PI / 2;
    asphalt.position.y = 0.01;
    asphalt.receiveShadow = true;
    scene.add(asphalt);

    const gridHelper = new THREE.GridHelper(Math.max(asphaltW, asphaltL), 20, 0x9cafc0, 0x9cafc0);
    gridHelper.position.y = 0.02;
    const gridMat = gridHelper.material;
    if (Array.isArray(gridMat)) {
      gridMat.forEach((m) => {
        m.opacity = 0.25;
        m.transparent = true;
      });
    } else {
      gridMat.opacity = 0.25;
      gridMat.transparent = true;
    }
    scene.add(gridHelper);

    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);
    const envGroup = new THREE.Group();
    scene.add(envGroup);

    const previewGroup = new THREE.Group();
    scene.add(previewGroup);

    this.sceneRef = { scene, camera, renderer, controls, buildingGroup, envGroup, previewGroup };
    this._bindDragInteractions(renderer.domElement, camera, controls);

    const animate = (time) => {
      this.animationId = requestAnimationFrame(animate);
      this._animateCrane(time);
      controls.update();
      renderer.render(scene, camera);
    };
    animate(performance.now());

    this._handleResize = () => {
      if (!this.container) return;
      const rw = Math.max(this.container.clientWidth, 1);
      const rh = Math.max(this.container.clientHeight, 500);
      camera.aspect = rw / rh;
      camera.updateProjectionMatrix();
      renderer.setSize(rw, rh);
    };
    window.addEventListener("resize", this._handleResize);

    const defaultParams = {
      width: 18,
      length: 36,
      height: 5,
      showSandwich: false,
      wallColor: 0x1a4b8c,
      roofColor: 0x9aa2a8,
      showWindows: false,
      showGate: false,
      windows: [],
      columnStep: 6,
      selectedWindowId: null,
      gateX: 0,
      gateSelected: false,
      showSideDoor: false,
      sideDoorWall: "left",
      sideDoorPos: 0,
      showFrontDoor: false,
      frontDoorPos: 0,
      selectedDoor: null,
      showCraneBeam: false,
      showMezzanine: false,
      mezzWall: "right",
      mezzHeight: 2.6,
      mezzDepthPct: 36,
      mezzLengthPct: 75,
      mezzPosZ: 0,
    };

    requestAnimationFrame(() => {
      this._handleResize();
      this.update(defaultParams);
      this._cameraLocked = true;
      if (this.onReady) this.onReady();
    });
  }

  _clearDragPreview() {
    if (!this.sceneRef?.previewGroup) return;
    const g = this.sceneRef.previewGroup;
    while (g.children.length > 0) {
      const c = g.children[0];
      g.remove(c);
      if (c instanceof THREE.Mesh || c instanceof THREE.LineSegments) {
        c.geometry?.dispose();
        c.material?.dispose();
      } else if (c instanceof THREE.Group) {
        c.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) obj.material.dispose();
        });
      }
    }
  }

  _showWindowPreview(wall, z, height, width) {
    this._clearDragPreview();
    const halfW = width / 2;
    const thick = 0.12;
    const wallX = wall === "left" ? -halfW - thick / 2 : halfW + thick / 2;
    const winW = 1.5;
    const winH = 1.2;
    const winBottomY = height * 0.45;
    const y = winBottomY + winH / 2;

    const group = new THREE.Group();

    const fillGeo = new THREE.BoxGeometry(thick * 2.2, winH, winW);
    const fillMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
    });
    const fill = new THREE.Mesh(fillGeo, fillMat);
    fill.position.set(wallX, y, z);
    group.add(fill);

    const edgeGeo = new THREE.EdgesGeometry(fillGeo);
    const edges = new THREE.LineSegments(
      edgeGeo,
      new THREE.LineBasicMaterial({ color: 0x1d4ed8, transparent: true, opacity: 0.95 })
    );
    edges.position.set(wallX, y, z);
    group.add(edges);

    const markerGeo = new THREE.PlaneGeometry(winW + 0.4, 0.35);
    const markerMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const marker = new THREE.Mesh(markerGeo, markerMat);
    marker.rotation.x = -Math.PI / 2;
    marker.position.set(wallX, 0.04, z);
    group.add(marker);

    const guideGeo = new THREE.PlaneGeometry(0.12, winW);
    const guide = new THREE.Mesh(guideGeo, new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
      depthWrite: false,
    }));
    guide.position.set(wallX, y, z);
    if (wall === "left") guide.rotation.y = Math.PI / 2;
    else guide.rotation.y = -Math.PI / 2;
    group.add(guide);

    this.sceneRef.previewGroup.add(group);
    this._drag.preview = group;
  }

  _updateWindowPreview(z) {
    if (!this._drag?.preview) return;
    for (const child of this._drag.preview.children) {
      child.position.z = z;
    }
  }

  _showGatePreview(x, height, width) {
    this._clearDragPreview();
    const { gateW, gateH } = getGateSize(width, height);
    const bounds = getBuildingBounds(this._params.length, this._params.columnStep || 6);
    const frontZ = bounds.startZ - 0.06;
    const y = gateH / 2;

    const group = new THREE.Group();

    const fillGeo = new THREE.BoxGeometry(gateW, gateH, 0.18);
    const fill = new THREE.Mesh(
      fillGeo,
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.35, depthWrite: false })
    );
    fill.position.set(x, y, frontZ);
    group.add(fill);

    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(fillGeo),
      new THREE.LineBasicMaterial({ color: 0xd97706, transparent: true, opacity: 0.95 })
    );
    edges.position.set(x, y, frontZ);
    group.add(edges);

    const marker = new THREE.Mesh(
      new THREE.PlaneGeometry(gateW + 0.5, 0.35),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false })
    );
    marker.rotation.x = -Math.PI / 2;
    marker.position.set(x, 0.04, frontZ);
    group.add(marker);

    this.sceneRef.previewGroup.add(group);
    this._drag.preview = group;
  }

  _updateGatePreview(x) {
    if (!this._drag?.preview) return;
    for (const child of this._drag.preview.children) {
      child.position.x = x;
    }
  }

  _animateCrane(time) {
    if (!this._params?.showCraneBeam || !this._craneMobileGroup) return;
    const { length, columnStep = 6 } = this._params;
    const { min, max } = getCraneZBounds(length, columnStep);
    const center = (min + max) / 2;
    const halfSpan = (max - min) / 2;
    const period = 14000;
    const phase = ((time - this._craneAnimStart) % period) / period;
    this._craneMobileGroup.position.z = center + halfSpan * Math.sin(phase * Math.PI * 2);
  }

  _showDoorPreview(wall, pos, height, width) {
    this._clearDragPreview();
    const halfW = width / 2;
    const thick = 0.12;
    const { doorW, doorH } = getDoorSize(height);
    const y = doorH / 2;
    const group = new THREE.Group();

    let px;
    let pz;
    let fillGeo;
    if (wall === "front" || wall === "back") {
      const frameCount = Math.ceil((this._params?.length ?? 36) / (this._params?.columnStep ?? 6));
      const totalLen = frameCount * (this._params?.columnStep ?? 6);
      const startZ = -totalLen / 2;
      px = pos;
      pz = wall === "front" ? startZ - thick / 2 : startZ + totalLen + thick / 2;
      fillGeo = new THREE.BoxGeometry(doorW, doorH, thick * 2.2);
    } else {
      px = wall === "left" ? -halfW - thick / 2 : halfW + thick / 2;
      pz = pos;
      fillGeo = new THREE.BoxGeometry(thick * 2.2, doorH, doorW);
    }

    const fillMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
    });
    const fill = new THREE.Mesh(fillGeo, fillMat);
    fill.position.set(px, y, pz);
    group.add(fill);

    const edgeGeo = new THREE.EdgesGeometry(fillGeo);
    const edges = new THREE.LineSegments(
      edgeGeo,
      new THREE.LineBasicMaterial({ color: 0x15803d, transparent: true, opacity: 0.95 })
    );
    edges.position.set(px, y, pz);
    group.add(edges);

    const marker = new THREE.Mesh(
      new THREE.PlaneGeometry(doorW + 0.35, 0.35),
      new THREE.MeshBasicMaterial({
        color: 0x16a34a,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    marker.rotation.x = -Math.PI / 2;
    marker.position.set(px, 0.04, pz);
    group.add(marker);

    this.sceneRef.previewGroup.add(group);
    this._drag.preview = group;
    this._drag.previewWall = wall;
  }

  _updateDoorPreview(pos) {
    if (!this._drag?.preview) return;
    const wall = this._drag.wall;
    for (const child of this._drag.preview.children) {
      if (isEndWall(wall)) child.position.x = pos;
      else child.position.z = pos;
    }
  }

  _bindDragInteractions(dom, camera, controls) {
    const pickTargets = () => this.sceneRef.buildingGroup.children;

    const onPointerDown = (e) => {
      const rect = dom.getBoundingClientRect();
      this._pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this._pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this._raycaster.setFromCamera(this._pointer, camera);
      const hits = this._raycaster.intersectObjects(pickTargets(), true);
      const gateHit = this._params?.showGate ? hits.find((h) => h.object.userData?.type === "gate-handle") : null;
      const doorHit = (this._params?.showSideDoor || this._params?.showFrontDoor)
        ? hits.find((h) => h.object.userData?.type === "door-handle")
        : null;
      const winHit = hits.find((h) => h.object.userData?.type === "window-handle");

      if (gateHit) {
        e.preventDefault();
        if (this.onGateSelect) this.onGateSelect();
        controls.enabled = false;
        dom.setPointerCapture(e.pointerId);
        const startX = gateHit.object.userData.gateX ?? gateHit.object.position.x;
        let xOffset = 0;
        if (this._raycaster.ray.intersectPlane(this._dragPlane, this._dragHit)) {
          const { minX, maxX } = getGateXBounds(this._params.width, getGateSize(this._params.width, this._params.height).gateW);
          const clickX = clamp(this._dragHit.x, minX, maxX);
          xOffset = startX - clickX;
        }
        this._drag = {
          mode: "gate",
          pointerId: e.pointerId,
          startX,
          xOffset,
          pendingX: startX,
        };
        this._showGatePreview(startX, this._params.height, this._params.width);
        dom.style.cursor = "grabbing";
        return;
      }

      if (doorHit) {
        e.preventDefault();
        const doorId = doorHit.object.userData.doorId;
        const wall = doorHit.object.userData.wall;
        if (this.onDoorSelect) this.onDoorSelect(doorId);
        controls.enabled = false;
        dom.setPointerCapture(e.pointerId);
        const startPos = doorHit.object.userData.doorPos ?? (isEndWall(wall) ? doorHit.object.position.x : doorHit.object.position.z);
        let posOffset = 0;
        if (this._raycaster.ray.intersectPlane(this._dragPlane, this._dragHit)) {
          if (wall === "front") {
            const { min, max } = getDoorPosBounds("front", this._params.width, this._params.length, this._params.columnStep || 6, this._params.height);
            posOffset = startPos - clamp(this._dragHit.x, min, max);
          } else if (wall === "back") {
            const { min, max } = getDoorPosBounds("back", this._params.width, this._params.length, this._params.columnStep || 6, this._params.height);
            posOffset = startPos - clamp(this._dragHit.x, min, max);
          } else {
            const bounds = getBuildingBounds(this._params.length, this._params.columnStep || 6);
            posOffset = startPos - clamp(this._dragHit.z, bounds.minZ + 1.2, bounds.maxZ - 1.2);
          }
        }
        this._drag = {
          mode: "door",
          doorId,
          wall,
          pointerId: e.pointerId,
          startPos,
          posOffset,
          pendingPos: startPos,
        };
        this._showDoorPreview(wall, startPos, this._params.height, this._params.width);
        dom.style.cursor = "grabbing";
        return;
      }

      if (!this._params?.showWindows || this._params.windows.length === 0 || !winHit) return;
      e.preventDefault();
      if (this.onWindowSelect) this.onWindowSelect(winHit.object.userData.id);
      controls.enabled = false;
      dom.setPointerCapture(e.pointerId);
      const wall = winHit.object.userData.wall;
      const startZ = winHit.object.position.z;
      let zOffset = 0;
      if (this._raycaster.ray.intersectPlane(this._dragPlane, this._dragHit)) {
        const bounds = getBuildingBounds(this._params.length, this._params.columnStep || 6);
        const clickZ = clamp(this._dragHit.z, bounds.minZ + 1.2, bounds.maxZ - 1.2);
        zOffset = startZ - clickZ;
      }
      this._drag = {
        mode: "window",
        id: winHit.object.userData.id,
        wall,
        pointerId: e.pointerId,
        startZ,
        zOffset,
        pendingZ: startZ,
      };
      this._showWindowPreview(wall, startZ, this._params.height, this._params.width);
      dom.style.cursor = "grabbing";
    };

    const onPointerMove = (e) => {
      if (!this._drag || e.pointerId !== this._drag.pointerId) return;
      const rect = dom.getBoundingClientRect();
      this._pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this._pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this._raycaster.setFromCamera(this._pointer, camera);
      if (!this._raycaster.ray.intersectPlane(this._dragPlane, this._dragHit)) return;

      if (this._drag.mode === "gate") {
        const { gateW } = getGateSize(this._params.width, this._params.height);
        const { minX, maxX } = getGateXBounds(this._params.width, gateW);
        const x = clamp(this._dragHit.x + this._drag.xOffset, minX, maxX);
        this._drag.pendingX = x;
        this._updateGatePreview(x);
        return;
      }

      if (this._drag.mode === "door") {
        let pos;
        if (this._drag.wall === "front") {
          pos = clampFrontDoorPos(
            this._dragHit.x + this._drag.posOffset,
            this._params.width,
            this._params.height,
            this._params.gateX ?? 0,
            this._params.showGate
          );
        } else if (this._drag.wall === "back") {
          const { min, max } = getDoorPosBounds("back", this._params.width, this._params.length, this._params.columnStep || 6, this._params.height);
          pos = clamp(this._dragHit.x + this._drag.posOffset, min, max);
        } else {
          const bounds = getBuildingBounds(this._params.length, this._params.columnStep || 6);
          pos = clamp(this._dragHit.z + this._drag.posOffset, bounds.minZ + 1.2, bounds.maxZ - 1.2);
        }
        this._drag.pendingPos = pos;
        this._updateDoorPreview(pos);
        return;
      }

      const bounds = getBuildingBounds(this._params.length, this._params.columnStep || 6);
      const z = clamp(this._dragHit.z + this._drag.zOffset, bounds.minZ + 1.2, bounds.maxZ - 1.2);
      this._drag.pendingZ = z;
      this._updateWindowPreview(z);
    };

    const endDrag = (e) => {
      if (!this._drag || e.pointerId !== this._drag.pointerId) return;
      controls.enabled = true;
      dom.releasePointerCapture(e.pointerId);
      dom.style.cursor = "";
      const drag = this._drag;
      this._clearDragPreview();
      if (drag.mode === "gate") {
        if (this.onGateChange) this.onGateChange(drag.pendingX ?? drag.startX);
      } else if (drag.mode === "door") {
        if (this.onDoorChange) this.onDoorChange(drag.doorId, drag.pendingPos ?? drag.startPos);
      } else if (this.onWindowsChange) {
        this.onWindowsChange(drag.id, drag.pendingZ ?? drag.startZ);
      }
      this._drag = null;
    };

    dom.addEventListener("pointerdown", onPointerDown);
    dom.addEventListener("pointermove", onPointerMove);
    dom.addEventListener("pointerup", endDrag);
    dom.addEventListener("pointercancel", endDrag);
    this._removeDragListeners = () => {
      dom.removeEventListener("pointerdown", onPointerDown);
      dom.removeEventListener("pointermove", onPointerMove);
      dom.removeEventListener("pointerup", endDrag);
      dom.removeEventListener("pointercancel", endDrag);
    };
  }

  update({ width, length, height, showSandwich, wallColor, roofColor, showWindows, showGate, showSideDoor, sideDoorWall, sideDoorPos, showFrontDoor, frontDoorPos, selectedDoor, showCraneBeam, showMezzanine, mezzWall, mezzHeight, mezzDepthPct, mezzLengthPct, mezzPosZ, windows = [], columnStep = 6, selectedWindowId = null, gateX = 0, gateSelected = false, ribbonGlazing = false, ribbonWall = "left" }) {
    if (!this.sceneRef) return;

    this._params = { width, length, height, showSandwich, wallColor, roofColor, showWindows, showGate, showSideDoor, sideDoorWall, sideDoorPos, showFrontDoor, frontDoorPos, selectedDoor, showCraneBeam, showMezzanine, mezzWall, mezzHeight, mezzDepthPct, mezzLengthPct, mezzPosZ, windows, columnStep, selectedWindowId, gateX, gateSelected, ribbonGlazing, ribbonWall };

    const { buildingGroup, envGroup } = this.sceneRef;

    while (buildingGroup.children.length > 0) {
      const child = buildingGroup.children[0];
      buildingGroup.remove(child);
      disposeMeshResources(child);
    }
    this._craneMobileGroup = null;

    createBuilding(buildingGroup, width, length, height, showSandwich, wallColor, roofColor, showWindows, showGate, showSideDoor, sideDoorWall, sideDoorPos, showFrontDoor, frontDoorPos, selectedDoor, showCraneBeam, showMezzanine, mezzWall, mezzHeight, mezzDepthPct, mezzLengthPct, mezzPosZ, windows, columnStep, selectedWindowId, gateX, gateSelected, ribbonGlazing, ribbonWall);

    this._craneMobileGroup = buildingGroup.getObjectByName("crane-mobile") ?? null;
    if (this._craneMobileGroup) {
      this._animateCrane(performance.now());
    }

    while (envGroup.children.length > 0) {
      const c = envGroup.children[0];
      envGroup.remove(c);
      disposeObject3D(c);
    }
    createEnvironment(envGroup, width, length, columnStep, gateX);
  }

  dispose() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener("resize", this._handleResize);
    if (this._removeDragListeners) this._removeDragListeners();
    this._clearDragPreview();
    if (!this.sceneRef) return;
    const { controls, renderer } = this.sceneRef;
    controls.dispose();
    renderer.dispose();
    if (renderer.domElement.parentNode === this.container) {
      this.container.removeChild(renderer.domElement);
    }
    this.sceneRef = null;
  }
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function getBuildingBounds(length, columnStep = 6) {
  const frameCount = Math.ceil(length / columnStep);
  const totalLen = frameCount * columnStep;
  const startZ = -totalLen / 2;
  return { startZ, totalLen, minZ: startZ, maxZ: startZ + totalLen, columnStep, frameCount };
}

function getCraneZBounds(length, columnStep = 6) {
  const bounds = getBuildingBounds(length, columnStep);
  return { min: bounds.minZ + 1.2, max: bounds.maxZ - 1.2 };
}

function getGateSize(width, height) {
  return {
    gateW: Math.min(4.2, width * 0.32),
    gateH: Math.min(4.0, height - 0.45),
  };
}

function getGateXBounds(width, gateW) {
  const halfW = width / 2;
  const margin = 1.2;
  return { minX: -halfW + gateW / 2 + margin, maxX: halfW - gateW / 2 - margin };
}

function getDoorSize(height) {
  return {
    doorW: 1.05,
    doorH: Math.min(2.15, height - 0.25),
  };
}

function getDoorPosBounds(wall, width, length, columnStep, height) {
  const bounds = getBuildingBounds(length, columnStep);
  const { doorW } = getDoorSize(height);
  const halfW = width / 2;
  const margin = 1.2;

  if (wall === "front" || wall === "back") {
    return {
      min: -halfW + doorW / 2 + margin,
      max: halfW - doorW / 2 - margin,
    };
  }

  return {
    min: bounds.minZ + 1.2 + doorW / 2,
    max: bounds.maxZ - 1.2 - doorW / 2,
  };
}

function clampFrontDoorPos(x, width, height, gateX, showGate) {
  const { doorW } = getDoorSize(height);
  const halfW = width / 2;
  const margin = 1.2;
  const absMin = -halfW + doorW / 2 + margin;
  const absMax = halfW - doorW / 2 - margin;
  x = clamp(x, absMin, absMax);
  if (!showGate) return x;

  const { gateW } = getGateSize(width, height);
  const gap = 0.2;
  const dLeft = x - doorW / 2;
  const dRight = x + doorW / 2;
  const gLeft = gateX - gateW / 2 - gap;
  const gRight = gateX + gateW / 2 + gap;
  if (dRight <= gLeft || dLeft >= gRight) return x;

  const leftSlot = gateX - gateW / 2 - gap - doorW / 2;
  const rightSlot = gateX + gateW / 2 + gap + doorW / 2;
  const target = Math.abs(x - leftSlot) <= Math.abs(x - rightSlot) ? leftSlot : rightSlot;
  return clamp(target, absMin, absMax);
}

function isEndWall(wall) {
  return wall === "front" || wall === "back";
}

function buildSmoothGable(group, width, height, apexH, thick, mat, z) {
  const halfW = width / 2;
  const shape = new THREE.Shape();
  shape.moveTo(-halfW, height);
  shape.lineTo(halfW, height);
  shape.lineTo(0, apexH);
  shape.closePath();

  const geo = new THREE.ExtrudeGeometry(shape, { depth: thick, bevelEnabled: false });
  geo.translate(0, 0, -thick / 2);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(0, 0, z);
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  group.add(mesh);
}

function buildSectionalGate(group, box, cx, z, thick, gateW, gateH, gateSelected) {
  const gatePanelMat = new THREE.MeshStandardMaterial({ color: 0xe8eaed, roughness: 0.42, metalness: 0.38 });
  const gateFrameMat = new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.32, metalness: 0.78 });
  const gateRibMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, roughness: 0.38, metalness: 0.55 });
  const gateGlassMat = new THREE.MeshStandardMaterial({
    color: 0xb8d4e8,
    roughness: 0.08,
    metalness: 0.15,
    transparent: true,
    opacity: 0.55,
    side: THREE.DoubleSide,
  });

  const sections = 4;
  const secH = gateH / sections;
  const frameW = 0.07;
  const panelInset = 0.1;

  box(frameW, gateH, thick * 1.8, gateFrameMat, cx - gateW / 2, gateH / 2, z);
  box(frameW, gateH, thick * 1.8, gateFrameMat, cx + gateW / 2, gateH / 2, z);
  box(gateW, frameW, thick * 1.8, gateFrameMat, cx, gateH - frameW / 2, z);
  box(gateW, 0.05, thick * 1.5, gateFrameMat, cx, 0.04, z);

  for (let s = 0; s < sections; s++) {
    const py = secH * s + secH / 2;
    const panelW = gateW - panelInset * 2;
    const panelH = secH - 0.08;

    box(panelW, panelH, thick * 0.95, gatePanelMat, cx, py, z - thick * 0.15);
    box(panelW - 0.12, 0.022, thick * 1.05, gateRibMat, cx, py - panelH * 0.28, z - thick * 0.08);
    box(panelW - 0.12, 0.022, thick * 1.05, gateRibMat, cx, py + panelH * 0.28, z - thick * 0.08);

    if (s < sections - 1) {
      box(gateW - panelInset * 0.5, 0.035, thick * 1.4, gateFrameMat, cx, secH * (s + 1), z);
    }
  }

  box(gateW - 0.35, secH * 0.38, thick * 0.55, gateGlassMat, cx, gateH - secH * 0.55, z - thick * 0.05);
  box(gateW - 0.55, 0.08, thick * 1.2, gateFrameMat, cx, 0.42, z);

  const handle = new THREE.Mesh(
    new THREE.BoxGeometry(gateW * 1.04, gateH * 1.02, thick * 5),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  handle.position.set(cx, gateH / 2, z);
  handle.userData = { type: "gate-handle", gateX: cx };
  group.add(handle);

  if (gateSelected) {
    const ring = new THREE.Mesh(
      new THREE.BoxGeometry(gateW * 1.08, gateH * 1.05, thick * 6),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.9 })
    );
    ring.position.set(cx, gateH / 2, z);
    group.add(ring);
  }
}

function buildSwingDoor(group, box, cx, cz, thick, doorW, doorH, doorSelected, wall, doorId, pickables) {
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.32, metalness: 0.78 });
  const panelMat = new THREE.MeshStandardMaterial({ color: 0x9aa2a8, roughness: 0.45, metalness: 0.35 });
  const frameW = 0.06;
  const isFacade = isEndWall(wall);

  if (isFacade) {
    box(frameW, doorH, thick * 1.7, frameMat, cx - doorW / 2, doorH / 2, cz);
    box(frameW, doorH, thick * 1.7, frameMat, cx + doorW / 2, doorH / 2, cz);
    box(doorW, frameW, thick * 1.7, frameMat, cx, doorH - frameW / 2, cz);
    box(doorW - 0.12, doorH - 0.14, thick * 0.95, panelMat, cx, doorH / 2, cz - thick * 0.08);
    box(0.04, 0.55, thick * 1.1, frameMat, cx + doorW * 0.32, doorH * 0.52, cz - thick * 0.12);
  } else {
    box(thick * 1.7, doorH, frameW, frameMat, cx, doorH / 2, cz - doorW / 2);
    box(thick * 1.7, doorH, frameW, frameMat, cx, doorH / 2, cz + doorW / 2);
    box(thick * 1.7, frameW, doorW, frameMat, cx, doorH - frameW / 2, cz);
    box(thick * 0.95, doorH - 0.14, doorW - 0.12, panelMat, cx - thick * 0.08, doorH / 2, cz);
    box(thick * 1.1, 0.55, 0.04, frameMat, cx - thick * 0.12, doorH * 0.52, cz + doorW * 0.32);
  }

  const handleGeo = isFacade
    ? new THREE.BoxGeometry(doorW * 1.05, doorH * 1.02, thick * 5)
    : new THREE.BoxGeometry(thick * 5, doorH * 1.02, doorW * 1.05);
  const handle = new THREE.Mesh(handleGeo, new THREE.MeshBasicMaterial({ visible: false }));
  handle.position.set(cx, doorH / 2, cz);
  handle.userData = { type: "door-handle", wall, doorId, doorPos: isFacade ? cx : cz };
  group.add(handle);
  if (pickables) pickables.push(handle);

  if (doorSelected) {
    const ringGeo = isFacade
      ? new THREE.BoxGeometry(doorW * 1.08, doorH * 1.05, thick * 6)
      : new THREE.BoxGeometry(thick * 6, doorH * 1.05, doorW * 1.08);
    const ring = new THREE.Mesh(
      ringGeo,
      new THREE.MeshBasicMaterial({ color: 0x22c55e, wireframe: true, transparent: true, opacity: 0.85 })
    );
    ring.position.set(cx, doorH / 2, cz);
    group.add(ring);
  }
}

function buildEndWall(group, box, width, height, apexH, thick, wallMat, z, showGate, gateX, gateW, gateH, gateSelected, showDoor = false, doorX = 0, doorW = 1, doorH = 2, doorSelected = false, wall = "front") {
  const halfW = width / 2;
  buildSmoothGable(group, width, height, apexH, thick, wallMat, z);

  if (!showGate && !showDoor) {
    box(width, height, thick, wallMat, 0, height / 2, z);
    return;
  }

  const xBreaks = new Set([-halfW, halfW]);
  const openings = [];
  const added = new Set();

  if (showGate) {
    xBreaks.add(gateX - gateW / 2);
    xBreaks.add(gateX + gateW / 2);
    openings.push({ kind: "gate", x: gateX, w: gateW, h: gateH, selected: gateSelected });
  }
  if (showDoor) {
    xBreaks.add(doorX - doorW / 2);
    xBreaks.add(doorX + doorW / 2);
    openings.push({ kind: "door", x: doorX, w: doorW, h: doorH, selected: doorSelected, doorId: "front" });
  }

  const xs = [...xBreaks].sort((a, b) => a - b);
  for (let i = 0; i < xs.length - 1; i++) {
    const x1 = xs[i];
    const x2 = xs[i + 1];
    const xMid = (x1 + x2) / 2;
    const segW = x2 - x1;
    if (segW < 0.05) continue;

    const opening = openings.find((o) => xMid > o.x - o.w / 2 + 0.001 && xMid < o.x + o.w / 2 - 0.001);
    if (opening) {
      const key = `${opening.kind}:${opening.x.toFixed(3)}`;
      if (added.has(key)) continue;
      added.add(key);
      const aboveH = height - opening.h;
      if (aboveH > 0.05) {
        box(opening.w, aboveH, thick, wallMat, opening.x, opening.h + aboveH / 2, z);
      }
      if (opening.kind === "gate") {
        buildSectionalGate(group, box, opening.x, z, thick, opening.w, opening.h, opening.selected);
      } else {
        buildSwingDoor(group, box, opening.x, z, thick, opening.w, opening.h, opening.selected, wall, opening.doorId ?? "front", null);
      }
    } else {
      box(segW, height, thick, wallMat, xMid, height / 2, z);
    }
  }
}

function addSideWallPlane(group, wallX, y, z, segW, segH, mat, facingLeft) {
  const geo = new THREE.PlaneGeometry(segW, segH);
  geo.rotateY(facingLeft ? Math.PI / 2 : -Math.PI / 2);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(wallX, y, z);
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  group.add(mesh);
}

function buildSideWallWithWindows(group, wallX, startZ, totalLen, height, thick, wallColor, glassMat, windows, pickables, selectedWindowId, facingLeft, door = null, doorSelected = false, wallSide = "left") {
  const winW = 1.5;
  const winH = 1.2;
  const winBottomY = height * 0.45;
  const winTopY = winBottomY + winH;
  const { doorW, doorH } = door ? getDoorSize(height) : { doorW: 0, doorH: 0 };

  const sorted = [...windows].sort((a, b) => a.z - b.z);
  const breaks = new Set([startZ, startZ + totalLen]);
  for (const w of sorted) {
    breaks.add(w.z - winW / 2);
    breaks.add(w.z + winW / 2);
  }
  if (door) {
    breaks.add(door.z - doorW / 2);
    breaks.add(door.z + doorW / 2);
  }
  const zs = [...breaks].sort((a, b) => a - b);
  const addedGlass = new Set();
  let addedDoor = false;

  function box(sx, sy, sz, mat, px, py, pz) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
    m.position.set(px, py, pz);
    m.castShadow = false;
    m.receiveShadow = true;
    group.add(m);
  }

  for (let i = 0; i < zs.length - 1; i++) {
    const z1 = zs[i];
    const z2 = zs[i + 1];
    const zMid = (z1 + z2) / 2;
    const segLen = z2 - z1;
    if (segLen < 0.01) continue;

    const win = sorted.find((w) => zMid > w.z - winW / 2 + 0.001 && zMid < w.z + winW / 2 - 0.001);
    const inDoor = door && zMid > door.z - doorW / 2 + 0.001 && zMid < door.z + doorW / 2 - 0.001;

    if (inDoor) {
      const aboveH = height - doorH;
      if (aboveH > 0.05) {
        const offX = (z1 - startZ) / PANEL_W_M;
        const mat = createSandwichMaterial(wallColor, segLen, aboveH, offX, doorH / PANEL_H_M);
        addSideWallPlane(group, wallX, doorH + aboveH / 2, zMid, segLen, aboveH, mat, facingLeft);
      }
      if (!addedDoor) {
        addedDoor = true;
        buildSwingDoor(group, box, wallX, door.z, thick, doorW, doorH, doorSelected, wallSide, "side", pickables);
      }
    } else if (!win) {
      const offX = (z1 - startZ) / PANEL_W_M;
      const mat = createSandwichMaterial(wallColor, segLen, height, offX, 0);
      addSideWallPlane(group, wallX, height / 2, zMid, segLen, height, mat, facingLeft);
    } else {
      const offX = (z1 - startZ) / PANEL_W_M;
      const matLow = createSandwichMaterial(wallColor, segLen, winBottomY, offX, 0);
      addSideWallPlane(group, wallX, winBottomY / 2, zMid, segLen, winBottomY, matLow, facingLeft);
      const aboveH = height - winTopY;
      const matHigh = createSandwichMaterial(wallColor, segLen, aboveH, offX, winTopY / PANEL_H_M);
      addSideWallPlane(group, wallX, winTopY + aboveH / 2, zMid, segLen, aboveH, matHigh, facingLeft);
      if (!addedGlass.has(win.id)) {
        addedGlass.add(win.id);
        const isSelected = win.id === selectedWindowId;
        const glass = new THREE.MeshStandardMaterial({
          color: isSelected ? 0x60a5fa : 0xadd8e6,
          roughness: 0.05,
          metalness: 0.1,
          transparent: true,
          opacity: isSelected ? 0.65 : 0.45,
          emissive: isSelected ? 0x2563eb : 0x000000,
          emissiveIntensity: isSelected ? 0.35 : 0,
          side: THREE.DoubleSide,
        });
        box(thick, winH, winW, glass, wallX, winBottomY + winH / 2, win.z);
        const handle = new THREE.Mesh(
          new THREE.BoxGeometry(thick * 3, winH * 1.05, winW * 1.05),
          new THREE.MeshBasicMaterial({ visible: false })
        );
        handle.position.set(wallX, winBottomY + winH / 2, win.z);
        handle.userData = { type: "window-handle", id: win.id, wall: win.wall };
        group.add(handle);
        pickables.push(handle);
        if (isSelected) {
          const ring = new THREE.Mesh(
            new THREE.BoxGeometry(thick * 3.5, winH * 1.15, winW * 1.15),
            new THREE.MeshBasicMaterial({ color: 0x2563eb, wireframe: true, transparent: true, opacity: 0.85 })
          );
          ring.position.set(wallX, winBottomY + winH / 2, win.z);
          group.add(ring);
        }
      }
    }
  }
}

function buildCraneBeam(group, box, width, height, totalLen, halfW) {
  const runwayY = Math.max(2.5, height - 0.5);
  const runwayMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.42, metalness: 0.82 });
  const craneMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.32, metalness: 0.78 });
  const railInset = 0.38;
  const railLen = totalLen - 1.2;
  const bridgeW = width - railInset * 2 - 0.25;

  box(0.16, 0.24, railLen, runwayMat, -halfW + railInset, runwayY, 0);
  box(0.16, 0.24, railLen, runwayMat, halfW - railInset, runwayY, 0);

  const bracketStep = 6;
  const bracketCount = Math.max(1, Math.floor(railLen / bracketStep));
  for (let i = 0; i <= bracketCount; i++) {
    const z = -railLen / 2 + (railLen / bracketCount) * i;
    box(0.12, 0.18, 0.12, runwayMat, -halfW + 0.12, runwayY - 0.12, z);
    box(0.12, 0.18, 0.12, runwayMat, halfW - 0.12, runwayY - 0.12, z);
  }

  const mobileGroup = new THREE.Group();
  mobileGroup.name = "crane-mobile";

  function mobileBox(sx, sy, sz, mat, px, py, pz) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
    m.position.set(px, py, pz);
    m.castShadow = false;
    m.receiveShadow = true;
    mobileGroup.add(m);
    return m;
  }

  mobileBox(bridgeW, 0.34, 0.3, craneMat, 0, runwayY + 0.1, 0);
  mobileBox(0.38, 0.3, 0.55, craneMat, -halfW + railInset, runwayY + 0.02, 0);
  mobileBox(0.38, 0.3, 0.55, craneMat, halfW - railInset, runwayY + 0.02, 0);
  mobileBox(0.6, 0.38, 0.5, craneMat, 0, runwayY + 0.02, 0);
  mobileBox(0.1, 1.1, 0.1, runwayMat, 0, runwayY - 0.45, 0);
  mobileBox(0.22, 0.14, 0.22, craneMat, 0, runwayY - 1.05, 0);

  group.add(mobileGroup);
  return mobileGroup;
}

function buildMezzanine(group, box, width, height, totalLen, halfW, opts) {
  const { mezzWall = "front", mezzHeight = 2.6, mezzDepthPct = 36, mezzLengthPct = 75 } = opts;
  const mezzY = mezzHeight;
  // Mezzanine spans the full width, depth into building along Z axis
  const mezzDepth = totalLen * (mezzDepthPct / 100);
  const isFront = mezzWall !== "back";
  const halfLen = totalLen / 2;
  // Outer edge at the end wall, inner edge further in
  const outerEdgeZ = isFront ? -halfLen : halfLen;
  const innerEdgeZ = isFront ? -halfLen + mezzDepth : halfLen - mezzDepth;
  const mezzMidZ = (outerEdgeZ + innerEdgeZ) / 2;
  const deckW = width - 0.6;

  const deckMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.68, metalness: 0.42 });
  const railMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.38, metalness: 0.72 });
  const postMat = new THREE.MeshStandardMaterial({ color: 0x8b9299, roughness: 0.36, metalness: 0.84 });

  // Floor deck
  box(deckW, 0.14, mezzDepth, deckMat, 0, mezzY, mezzMidZ);

  // Support posts along width and at inner edge
  const postCols = Math.max(2, Math.round(deckW / 4));
  for (let i = 0; i <= postCols; i++) {
    const x = -deckW / 2 + (deckW / postCols) * i;
    box(0.16, mezzY, 0.16, postMat, x, mezzY / 2, innerEdgeZ);
    box(0.16, mezzY, 0.16, postMat, x, mezzY / 2, outerEdgeZ);
  }

  // Railing on the inner (open) edge
  box(deckW, 1.0, 0.06, railMat, 0, mezzY + 0.55, innerEdgeZ);
  box(deckW, 0.05, 0.05, railMat, 0, mezzY + 0.28, innerEdgeZ);

  // Stairs go from floor toward end wall (under the mezzanine)
  const stairW = 0.9;
  const stepRun = 0.28;
  const numSteps = Math.max(6, Math.ceil(mezzY / 0.18));
  const stepRise = mezzY / numSteps;
  const stairX = deckW / 2 - stairW / 2 - 0.1;
  // stairSign: front→stairs go toward front wall (negative Z), back→positive Z
  const stairSign = isFront ? -1 : 1;
  const stairStartZ = innerEdgeZ + stairSign * stepRun * 0.4;

  for (let s = 0; s < numSteps; s++) {
    const stepBottom = stepRise * s;
    const stepCenterY = stepBottom + stepRise * 0.45;
    const stepZ = stairStartZ + stairSign * s * stepRun;
    box(stairW, stepRise * 0.9, stepRun, deckMat, stairX, stepCenterY, stepZ);
  }

  const stairLen = numSteps * stepRun;
  const stairMidZ = stairStartZ + stairSign * stairLen / 2;
  box(0.05, mezzY, 0.05, railMat, stairX + stairW / 2 + 0.04, mezzY / 2, stairMidZ);
  box(0.04, 0.04, stairLen, railMat, stairX + stairW / 2 + 0.04, mezzY - 0.05, stairMidZ);
}

function buildRibbonGlazingWall(group, wallX, startZ, totalLen, height, thick, wallColor, columnStep, facingLeft, door, doorSelected, wallSide, pickables) {
  const ribbonH = 1.4;
  const ribbonBottomY = height * 0.42;
  const ribbonTopY = ribbonBottomY + ribbonH;
  const frameCount = Math.ceil(totalLen / columnStep);
  const { doorW, doorH } = door ? getDoorSize(height) : { doorW: 0, doorH: 0 };

  const ribbonGlassMat = new THREE.MeshStandardMaterial({
    color: 0x87ceeb,
    roughness: 0.02,
    metalness: 0.12,
    transparent: true,
    opacity: 0.55,
    side: THREE.DoubleSide,
  });
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.32, metalness: 0.78 });

  function box(sx, sy, sz, mat, px, py, pz) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
    m.position.set(px, py, pz);
    m.castShadow = false;
    m.receiveShadow = true;
    group.add(m);
  }

  // Wall below ribbon
  const matBelow = createSandwichMaterial(wallColor, totalLen, ribbonBottomY, 0, 0);
  addSideWallPlane(group, wallX, ribbonBottomY / 2, 0, totalLen, ribbonBottomY, matBelow, facingLeft);

  // Wall above ribbon
  const aboveH = height - ribbonTopY;
  if (aboveH > 0.05) {
    const matAbove = createSandwichMaterial(wallColor, totalLen, aboveH, 0, ribbonTopY / PANEL_H_M);
    addSideWallPlane(group, wallX, ribbonTopY + aboveH / 2, 0, totalLen, aboveH, matAbove, facingLeft);
  }

  // Glass strip — one per bay
  for (let i = 0; i < frameCount; i++) {
    const bayStart = startZ + i * columnStep;
    const bayEnd = bayStart + columnStep;
    const bayMid = (bayStart + bayEnd) / 2;
    const glassLen = columnStep - 0.3;

    // Skip bay if door is in it
    if (door && Math.abs(door.z - bayMid) < columnStep / 2) continue;

    const glassGeo = new THREE.PlaneGeometry(glassLen, ribbonH);
    glassGeo.rotateY(facingLeft ? Math.PI / 2 : -Math.PI / 2);
    const glass = new THREE.Mesh(glassGeo, ribbonGlassMat);
    glass.position.set(wallX, ribbonBottomY + ribbonH / 2, bayMid);
    group.add(glass);

    // Horizontal frame bars (top and bottom of ribbon)
    box(thick * 1.5, 0.04, glassLen, frameMat, wallX, ribbonBottomY, bayMid);
    box(thick * 1.5, 0.04, glassLen, frameMat, wallX, ribbonTopY, bayMid);

    // Vertical mullions every ~1.5m
    const mullionCount = Math.max(1, Math.floor(glassLen / 1.5));
    for (let m = 1; m < mullionCount; m++) {
      const mz = bayStart + 0.15 + (glassLen / mullionCount) * m;
      box(thick * 1.2, ribbonH, 0.03, frameMat, wallX, ribbonBottomY + ribbonH / 2, mz);
    }
  }

  // Door if present
  if (door) {
    buildSwingDoor(group, box, wallX, door.z, thick, doorW, doorH, doorSelected, wallSide, "side", pickables);
    // Wall patch above door in ribbon zone
    const doorAboveInRibbon = ribbonTopY - doorH;
    if (doorAboveInRibbon > 0.1 && doorH < ribbonTopY) {
      // small patch — handled by the wall sections above
    }
  }
}

function createBuilding(group, width, length, height, showSandwich, wallColor, roofColor, showWindows, showGate, showSideDoor, sideDoorWall, sideDoorPos, showFrontDoor, frontDoorPos, selectedDoor, showCraneBeam, showMezzanine, mezzWall, mezzHeight, mezzDepthPct, mezzLengthPct, mezzPosZ, windows = [], columnStep = 6, selectedWindowId = null, gateX = 0, gateSelected = false, ribbonGlazing = false, ribbonWall = "left") {
  const roofPitch = Math.tan((6 * Math.PI) / 180);
  const apexH = height + (width / 2) * roofPitch;
  const halfW = width / 2;

  const steelMat = new THREE.MeshStandardMaterial({ color: 0x8b9299, roughness: 0.35, metalness: 0.85 });
  const purlinMat = new THREE.MeshStandardMaterial({ color: 0x9aa2a8, roughness: 0.4, metalness: 0.75 });
  const boltMat = new THREE.MeshStandardMaterial({ color: 0x4a5568, roughness: 0.3, metalness: 0.9 });
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x3d4654, roughness: 0.42, metalness: 0.55 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0xadd8e6, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.45, side: THREE.DoubleSide });

  const frameCount = Math.ceil(length / columnStep);
  const totalLen = frameCount * columnStep;
  const startZ = -totalLen / 2;

  function box(sx, sy, sz, mat, px, py, pz, rx = 0, ry = 0, rz = 0) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
    m.position.set(px, py, pz);
    m.rotation.set(rx, ry, rz);
    m.castShadow = false;
    m.receiveShadow = true;
    group.add(m);
    return m;
  }

  const foundationMat = new THREE.MeshStandardMaterial({ color: 0xa3a8af, roughness: 0.9, metalness: 0.04 });
  const foundationH = 0.45;
  box(width + 1.4, foundationH, totalLen + 1.4, foundationMat, 0, foundationH / 2, 0);

  for (let i = 0; i <= frameCount; i++) {
    const z = startZ + i * columnStep;

    box(0.2, height, 0.15, steelMat, -halfW, height / 2, z);
    box(0.2, height, 0.15, steelMat, halfW, height / 2, z);

    box(0.4, 0.06, 0.3, boltMat, -halfW, 0.03, z);
    box(0.4, 0.06, 0.3, boltMat, halfW, 0.03, z);

    {
      const dx = halfW;
      const dy = apexH - height;
      const rafLen = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      const midX = -halfW + dx / 2;
      const midY = height + dy / 2;
      box(rafLen, 0.18, 0.12, steelMat, midX, midY, z, 0, 0, angle);
    }
    {
      const dx = halfW;
      const dy = apexH - height;
      const rafLen = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      const midX = halfW - dx / 2;
      const midY = height + dy / 2;
      box(rafLen, 0.18, 0.12, steelMat, midX, midY, z, 0, 0, -angle);
    }

    box(0.25, 0.25, 0.15, boltMat, 0, apexH, z);

    // Rigel — horizontal beam connecting the tops of both columns
    box(width, 0.12, 0.12, steelMat, 0, height, z);
  }

  const wallPurlinCount = Math.max(2, Math.round(height / 1.5));
  for (let p = 1; p <= wallPurlinCount; p++) {
    const y = (height / (wallPurlinCount + 1)) * p;
    box(0.08, 0.06, totalLen, purlinMat, -halfW, y, 0);
    box(0.08, 0.06, totalLen, purlinMat, halfW, y, 0);
  }

  const roofPurlinCount = 4;
  {
    const dx = halfW;
    const dy = apexH - height;
    const angle = Math.atan2(dy, dx);
    for (let p = 1; p <= roofPurlinCount; p++) {
      const t = p / (roofPurlinCount + 1);
      const lx = -halfW + dx * t;
      const ly = height + dy * t;
      box(0.06, 0.06, totalLen, purlinMat, lx, ly, 0, 0, 0, angle);
      box(0.06, 0.06, totalLen, purlinMat, -lx, ly, 0, 0, 0, -angle);
    }
  }

  box(0.1, 0.1, totalLen, steelMat, 0, apexH, 0);

  for (const span of [0, frameCount - 1]) {
    const z0 = startZ + span * columnStep;
    const z1 = z0 + columnStep;
    addDiag(group, -halfW, 0, z0, -halfW, height, z1, 0.05, steelMat);
    addDiag(group, -halfW, height, z0, -halfW, 0, z1, 0.05, steelMat);
    addDiag(group, halfW, 0, z0, halfW, height, z1, 0.05, steelMat);
    addDiag(group, halfW, height, z0, halfW, 0, z1, 0.05, steelMat);
  }

  const endColStep = 3;
  const endColCount = Math.floor(width / endColStep) - 1;

  for (const endZ of [startZ, startZ + totalLen]) {
    for (let c = 1; c <= endColCount; c++) {
      const cx = -halfW + c * (width / (endColCount + 1));
      const colHeight = height + (halfW - Math.abs(cx)) * roofPitch;
      box(0.15, colHeight, 0.15, steelMat, cx, colHeight / 2, endZ);
      box(0.3, 0.05, 0.3, boltMat, cx, 0.025, endZ);
    }

    const endPurlinCount = Math.max(2, Math.round(height / 1.5));
    for (let p = 1; p <= endPurlinCount; p++) {
      const y = (height / (endPurlinCount + 1)) * p;
      box(width, 0.06, 0.08, purlinMat, 0, y, endZ);
    }

    const dx = halfW;
    const dy = apexH - height;
    const rafAngle = Math.atan2(dy, dx);
    const rafLen = Math.sqrt(dx * dx + dy * dy);
    box(rafLen, 0.12, 0.1, steelMat, -dx / 2, height + dy / 2, endZ, 0, 0, rafAngle);
    box(rafLen, 0.12, 0.1, steelMat, dx / 2, height + dy / 2, endZ, 0, 0, -rafAngle);

    const frontPurlinCount = 3;
    for (let p = 1; p <= frontPurlinCount; p++) {
      const t = p / (frontPurlinCount + 1);
      const lx = -halfW + dx * t;
      const ly = height + dy * t;
      box(0.08, 0.06, 0.08, purlinMat, lx, ly, endZ);
      box(0.08, 0.06, 0.08, purlinMat, -lx, ly, endZ);
    }

    addDiag(group, -halfW, 0, endZ, 0, apexH, endZ, 0.05, steelMat);
    addDiag(group, halfW, 0, endZ, 0, apexH, endZ, 0.05, steelMat);
  }

  box(0.1, 0.08, totalLen, steelMat, -halfW, 0.12, 0);
  box(0.1, 0.08, totalLen, steelMat, halfW, 0.12, 0);

  const pickables = [];

  if (showCraneBeam) {
    buildCraneBeam(group, box, width, height, totalLen, halfW);
  }
  if (showMezzanine) {
    buildMezzanine(group, box, width, height, totalLen, halfW, {
      mezzWall,
      mezzHeight,
      mezzDepthPct,
      mezzLengthPct,
      mezzPosZ,
    });
  }

  if (showSandwich) {
    const thick = 0.12;
    const wallMat = createSandwichMaterial(wallColor, totalLen, height);
    const endWallMat = createSandwichMaterial(wallColor, width, height);
    const roofMat = createRoofMaterial(roofColor, totalLen, 6);
    const { gateW, gateH } = getGateSize(width, height);
    const { doorW, doorH } = getDoorSize(height);
    const { minX, maxX } = getGateXBounds(width, gateW);
    const clampedGateX = clamp(gateX, minX, maxX);
    const sideBounds = getDoorPosBounds(sideDoorWall, width, length, columnStep, height);
    const clampedSideDoorPos = showSideDoor ? clamp(sideDoorPos, sideBounds.min, sideBounds.max) : 0;
    const clampedFrontDoorPos = showFrontDoor ? clampFrontDoorPos(frontDoorPos, width, height, clampedGateX, showGate) : 0;
    const frontZ = startZ - thick / 2;
    const backZ = startZ + totalLen + thick / 2;

    const leftDoor = showSideDoor && sideDoorWall === "left" ? { z: clampedSideDoorPos } : null;
    const rightDoor = showSideDoor && sideDoorWall === "right" ? { z: clampedSideDoorPos } : null;
    const leftWins = windows.filter((w) => w.wall === "left");
    const rightWins = windows.filter((w) => w.wall === "right");

    const ribbonLeft = ribbonGlazing && (ribbonWall === "left" || ribbonWall === "both");
    const ribbonRight = ribbonGlazing && (ribbonWall === "right" || ribbonWall === "both");

    if (ribbonLeft) {
      buildRibbonGlazingWall(group, -halfW - thick / 2, startZ, totalLen, height, thick, wallColor, columnStep, true, leftDoor, selectedDoor === "side" && sideDoorWall === "left", "left", pickables);
    } else if ((showWindows && leftWins.length > 0) || leftDoor) {
      buildSideWallWithWindows(group, -halfW - thick / 2, startZ, totalLen, height, thick, wallColor, glassMat, leftWins, pickables, selectedWindowId, true, leftDoor, selectedDoor === "side" && sideDoorWall === "left", "left");
    } else {
      addSideWallPlane(group, -halfW - thick / 2, height / 2, 0, totalLen, height, wallMat, true);
    }

    if (ribbonRight) {
      buildRibbonGlazingWall(group, halfW + thick / 2, startZ, totalLen, height, thick, wallColor, columnStep, false, rightDoor, selectedDoor === "side" && sideDoorWall === "right", "right", pickables);
    } else if ((showWindows && rightWins.length > 0) || rightDoor) {
      buildSideWallWithWindows(group, halfW + thick / 2, startZ, totalLen, height, thick, wallColor, glassMat, rightWins, pickables, selectedWindowId, false, rightDoor, selectedDoor === "side" && sideDoorWall === "right", "right");
    } else {
      addSideWallPlane(group, halfW + thick / 2, height / 2, 0, totalLen, height, wallMat, false);
    }

    buildEndWall(
      group, box, width, height, apexH, thick, endWallMat, frontZ,
      showGate, clampedGateX, gateW, gateH, gateSelected,
      showFrontDoor, clampedFrontDoorPos, doorW, doorH, selectedDoor === "front", "front"
    );
    buildEndWall(group, box, width, height, apexH, thick, endWallMat, backZ, false, 0, gateW, gateH, false, false, 0, doorW, doorH, false, "back");

    const trimT = 0.07;
    for (const z of [frontZ, backZ]) {
      addSideWallPlane(group, -halfW - thick / 2 - trimT / 2, height / 2, z, trimT, height, trimMat, true);
      addSideWallPlane(group, halfW + thick / 2 + trimT / 2, height / 2, z, trimT, height, trimMat, false);
    }
    box(width + thick * 2 + trimT * 2, trimT, trimT, trimMat, 0, height + trimT / 2, frontZ);
    box(width + thick * 2 + trimT * 2, trimT, trimT, trimMat, 0, height + trimT / 2, backZ);

    {
      const dx = halfW;
      const dy = apexH - height;
      const rafLen = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      box(rafLen, thick, totalLen, roofMat, -dx / 2, height + dy / 2, 0, 0, 0, angle);
      box(rafLen, thick, totalLen, roofMat, dx / 2, height + dy / 2, 0, 0, 0, -angle);
    }

    box(0.2, 0.15, totalLen, steelMat, 0, apexH + thick / 2, 0);

    const floorMat = new THREE.MeshStandardMaterial({ color: 0xc8c4b8, roughness: 0.85, metalness: 0 });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(width - thick * 2, totalLen - thick * 2), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0.005, 0);
    floor.receiveShadow = true;
    group.add(floor);

    const fixtureCount = Math.ceil(totalLen / columnStep);
    const fixtureMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffee, emissiveIntensity: 0.8, roughness: 0.3 });
    for (let f = 0; f < fixtureCount; f++) {
      const fz = startZ + thick + (f + 0.5) * ((totalLen - thick * 2) / fixtureCount);
      const fixture = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 1.2), fixtureMat);
      fixture.position.set(0, apexH - 0.3, fz);
      group.add(fixture);
    }

    // Makstal logo on front wall
    const logoW = Math.min(width * 0.35, 6);
    const logoH = logoW * 0.3;
    const logoY = height * 0.75;
    const logoZ = startZ - thick / 2 - 0.02;
    if (!window.__makstilLogoTex) {
      const loader = new THREE.TextureLoader();
      window.__makstilLogoTex = loader.load("/logo-makstil-new.png");
      window.__makstilLogoTex.colorSpace = THREE.SRGBColorSpace;
    }
    const logoMat = new THREE.MeshBasicMaterial({
      map: window.__makstilLogoTex,
      transparent: true,
      depthWrite: false,
    });
    const logoPlane = new THREE.Mesh(new THREE.PlaneGeometry(logoW, logoH), logoMat);
    logoPlane.position.set(0, logoY, logoZ);
    group.add(logoPlane);
  }
}

function disposeObject3D(obj) {
  disposeMeshResources(obj);
}

function createEnvironment(group, width, length, columnStep = 6, gateX = 0) {
  const totalLen = Math.ceil(length / columnStep) * columnStep;
  const halfLen = totalLen / 2;
  const halfW = width / 2;

  const roadMat = new THREE.MeshStandardMaterial({ color: 0x6b7280, roughness: 0.98, metalness: 0 });
  const dashMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 });
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c3a1e, roughness: 0.9 });
  const crownMat = new THREE.MeshStandardMaterial({ color: 0x2d6a2d, roughness: 0.9 });
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4, metalness: 0.7 });
  const lampMat = new THREE.MeshStandardMaterial({ color: 0xffffe0, roughness: 0.3, emissive: 0xffffe0, emissiveIntensity: 0.4 });

  const roadLen = 30;
  const road = new THREE.Mesh(new THREE.PlaneGeometry(6, roadLen), roadMat);
  road.rotation.x = -Math.PI / 2;
  road.position.set(gateX, 0.015, -halfLen - roadLen / 2);
  group.add(road);

  for (let d = 0; d < 6; d++) {
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 2), dashMat);
    dash.rotation.x = -Math.PI / 2;
    dash.position.set(gateX, 0.02, -halfLen - 4 - d * 4);
    group.add(dash);
  }

  const parkX = halfW + 3;

  const treePos = [
    [-halfW - 8, -halfLen - 5],
    [-halfW - 8, -halfLen + 4],
    [-halfW - 8, halfLen - 4],
    [-halfW - 8, halfLen + 5],
    [halfW + 8, -halfLen - 5],
    [halfW + 8, halfLen - 4],
    [parkX + 16, halfLen / 2 - 5],
    [parkX + 16, halfLen / 2 + 5],
  ];
  for (const [tx, tz] of treePos) {
    const h = 4.5;
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, h, 7), trunkMat);
    trunk.position.set(tx, h / 2, tz);
    trunk.castShadow = true;
    group.add(trunk);
    const crown = new THREE.Mesh(new THREE.SphereGeometry(1.7, 7, 6), crownMat);
    crown.position.set(tx, h + 1.2, tz);
    crown.castShadow = true;
    group.add(crown);
  }

  const polePos = [
    [-halfW - 5, -halfLen + 1],
    [-halfW - 5, halfLen - 1],
    [halfW + 5, -halfLen + 1],
    [halfW + 5, halfLen - 1],
  ];
  for (const [px, pz] of polePos) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 7, 8), poleMat);
    pole.position.set(px, 3.5, pz);
    pole.castShadow = true;
    group.add(pole);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.5, 6), poleMat);
    arm.rotation.z = Math.PI / 2;
    arm.position.set(px + 0.75, 7, pz);
    group.add(arm);
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.18, 0.35), lampMat);
    lamp.position.set(px + 1.4, 6.9, pz);
    group.add(lamp);
  }
}

function addDiag(group, x1, y1, z1, x2, y2, z2, thickness, material) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dz = z2 - z1;
  const len = Math.sqrt(dx * dx + dy * dy + dz * dz);

  const geometry = new THREE.BoxGeometry(thickness, len, thickness);
  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2);
  mesh.lookAt(x2, y2, z2);
  mesh.rotateX(Math.PI / 2);
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  group.add(mesh);
}
