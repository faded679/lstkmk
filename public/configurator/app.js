import { ConfiguratorScene } from "./three-scene.js";

const RAL_COLORS = [
  { name: "RAL 5005 Синий", hex: "#1a4b8c", value: 0x1a4b8c },
  { name: "RAL 6005 Зелёный", hex: "#1f4f2b", value: 0x1f4f2b },
  { name: "RAL 7035 Светло-серый", hex: "#c2c5c0", value: 0xc2c5c0 },
  { name: "RAL 3005 Бордо", hex: "#621827", value: 0x621827 },
  { name: "RAL 8017 Коричневый", hex: "#4a2b1a", value: 0x4a2b1a },
  { name: "RAL 9003 Белый", hex: "#f4f4f4", value: 0xf4f4f4 },
  { name: "RAL 1018 Жёлтый", hex: "#f5d033", value: 0xf5d033 },
  { name: "RAL 2004 Оранжевый", hex: "#e05c1a", value: 0xe05c1a },
];

const ROOF_COLORS = [
  { name: "RAL 9006 Бело-алюминиевый", hex: "#a1a1a0", value: 0x9aa2a8 },
  { name: "RAL 7035 Светло-серый", hex: "#c2c5c0", value: 0xc2c5c0 },
  { name: "RAL 7004 Сигнальный серый", hex: "#969992", value: 0x969992 },
  { name: "RAL 5005 Синий", hex: "#1a4b8c", value: 0x1a4b8c },
  { name: "RAL 6005 Зелёный", hex: "#1f4f2b", value: 0x1f4f2b },
  { name: "RAL 8017 Коричневый", hex: "#4a2b1a", value: 0x4a2b1a },
  { name: "RAL 9003 Белый", hex: "#f4f4f4", value: 0xf4f4f4 },
  { name: "RAL 3005 Бордо", hex: "#621827", value: 0x621827 },
];

const state = {
  width: 18,
  length: 36,
  height: 5,
  columnStep: 6,
  showSandwich: false,
  wallColor: RAL_COLORS[0].value,
  roofColor: 0x9aa2a8,
  showWindows: false,
  showGate: false,
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
  mezzWall: "front",
  mezzHeightRatio: "2_3",
  mezzHeight: (5 * 2) / 3,
  mezzDepthPct: 36,
  mezzLengthPct: 75,
  mezzPosZ: 0,
  windows: [],
  selectedWindowId: null,
  ribbonGlazing: false,
  ribbonWall: "left",
};

const $ = (id) => document.getElementById(id);

const els = {
  width: $("width"),
  length: $("length"),
  height: $("height"),
  widthVal: $("width-val"),
  lengthVal: $("length-val"),
  heightVal: $("height-val"),
  columnStepVal: $("column-step-val"),
  columnStepInput: $("column-step-input"),
  stepBtns: document.querySelectorAll(".step-btn"),
  sandwich: $("sandwich"),
  openingsSection: $("openings-section"),
  windows: $("windows"),
  gate: $("gate"),
  gateHint: $("gate-hint"),
  doorSide: $("door-side"),
  doorFront: $("door-front"),
  doorSideBtns: $("door-side-btns"),
  doorHint: $("door-hint"),
  doorWallBtns: document.querySelectorAll(".door-wall-btn"),
  windowTools: $("window-tools"),
  addWindowLeft: $("add-window-left"),
  addWindowRight: $("add-window-right"),
  removeWindow: $("remove-window"),
  windowCount: $("window-count"),
  colorSection: $("color-section"),
  colorGrid: $("color-grid"),
  colorName: $("color-name"),
  claddingColors: $("cladding-colors"),
  roofColorSection: $("roof-color-section"),
  roofColorGrid: $("roof-color-grid"),
  roofColorName: $("roof-color-name"),
  crane: $("crane"),
  mezzanine: $("mezzanine"),
  mezzanineTools: $("mezzanine-tools"),
  mezzHeightBtns: document.querySelectorAll(".mezz-height-btn"),
  mezzHeightVal: $("mezz-height-val"),
  mezzDepth: $("mezz-depth"),
  mezzDepthVal: $("mezz-depth-val"),
  mezzLength: $("mezz-length"),
  mezzLengthVal: $("mezz-length-val"),
  mezzPos: $("mezz-pos"),
  mezzPosVal: $("mezz-pos-val"),
  mezzWallBtns: document.querySelectorAll(".mezz-wall-btn"),
  ribbonGlazing: $("ribbon-glazing"),
  ribbonTools: $("ribbon-tools"),
  ribbonWallBtns: document.querySelectorAll(".ribbon-wall-btn"),
  statColumns: $("stat-columns"),
  statFrames: $("stat-frames"),
  statArea: $("stat-area"),
  loading: $("loading"),
  container: $("canvas-container"),
};

let scene = null;
let windowIdSeq = 0;
let renderTimer = null;
let prevShowSandwich = false;

function setAccordionOpen(name, open) {
  const item = document.querySelector(`[data-accordion="${name}"]`);
  if (!item || item.classList.contains("hidden")) return;
  item.classList.toggle("is-open", open);
  item.querySelector(".accordion-trigger")?.setAttribute("aria-expanded", String(open));
}

function initAccordion() {
  document.querySelectorAll(".accordion-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".accordion-item");
      if (!item) return;
      const open = !item.classList.contains("is-open");
      item.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  });
}

function getBuildingZBounds() {
  const columnStep = state.columnStep;
  const frameCount = Math.ceil(state.length / columnStep);
  const totalLen = frameCount * columnStep;
  const startZ = -totalLen / 2;
  return {
    startZ,
    totalLen,
    frameCount,
    minZ: startZ + 1.2,
    maxZ: startZ + totalLen - 1.2,
    centerZ: startZ + totalLen / 2,
  };
}

function getDoorSize(height) {
  return {
    doorW: 1.05,
    doorH: Math.min(2.15, height - 0.25),
  };
}

function hasAnyDoor() {
  return state.showSideDoor || state.showFrontDoor;
}

function clampFrontDoorPos(x) {
  const { doorW } = getDoorSize(state.height);
  const halfW = state.width / 2;
  const margin = 1.2;
  const absMin = -halfW + doorW / 2 + margin;
  const absMax = halfW - doorW / 2 - margin;
  x = Math.max(absMin, Math.min(absMax, x));
  if (!state.showGate) return x;

  const { gateW } = getGateSize(state.width, state.height);
  const gateX = state.gateX ?? 0;
  const gap = 0.2;
  const dLeft = x - doorW / 2;
  const dRight = x + doorW / 2;
  const gLeft = gateX - gateW / 2 - gap;
  const gRight = gateX + gateW / 2 + gap;
  if (dRight <= gLeft || dLeft >= gRight) return x;

  const leftSlot = gateX - gateW / 2 - gap - doorW / 2;
  const rightSlot = gateX + gateW / 2 + gap + doorW / 2;
  const target = Math.abs(x - leftSlot) <= Math.abs(x - rightSlot) ? leftSlot : rightSlot;
  return Math.max(absMin, Math.min(absMax, target));
}

function getSideDoorPosBounds() {
  const { minZ, maxZ } = getBuildingZBounds();
  const { doorW } = getDoorSize(state.height);
  return {
    min: minZ + doorW / 2,
    max: maxZ - doorW / 2,
  };
}

function getDefaultSideDoorPos() {
  const { minZ, maxZ } = getBuildingZBounds();
  return (minZ + maxZ) / 2;
}

function getDefaultFrontDoorPos() {
  const { doorW } = getDoorSize(state.height);
  const gap = 0.2;
  const halfW = state.width / 2;
  const margin = 1.2;
  const max = halfW - doorW / 2 - margin;
  const min = -halfW + doorW / 2 + margin;
  if (state.showGate) {
    const { gateW } = getGateSize(state.width, state.height);
    const gateX = state.gateX ?? 0;
    const rightSlot = gateX + gateW / 2 + gap + doorW / 2;
    if (rightSlot <= max) return rightSlot;
    const leftSlot = gateX - gateW / 2 - gap - doorW / 2;
    if (leftSlot >= min) return leftSlot;
  }
  return Math.min(max, halfW * 0.55);
}

function clampDoors() {
  if (state.showSideDoor) {
    const { min, max } = getSideDoorPosBounds();
    state.sideDoorPos = Math.max(min, Math.min(max, state.sideDoorPos ?? 0));
    state.sideDoorPos = avoidColumns(state.sideDoorPos, 0.525);
    state.sideDoorPos = Math.max(min, Math.min(max, state.sideDoorPos));
  }
  if (state.showFrontDoor) {
    state.frontDoorPos = clampFrontDoorPos(state.frontDoorPos ?? 0);
  }
}

function getGateSize(width, height) {
  return {
    gateW: Math.min(4.2, width * 0.32),
    gateH: Math.min(4.0, height - 0.45),
  };
}

function getGateXBounds() {
  const { gateW } = getGateSize(state.width, state.height);
  const halfW = state.width / 2;
  const margin = 1.2;
  return { minX: -halfW + gateW / 2 + margin, maxX: halfW - gateW / 2 - margin };
}

function clampGate() {
  if (!state.showGate) return;
  const { minX, maxX } = getGateXBounds();
  state.gateX = Math.max(minX, Math.min(maxX, state.gateX ?? 0));
}

function getMezzHeightBounds() {
  return { min: 2.0, max: Math.max(2.0, state.height - 1.2) };
}

function getMezzPosBounds() {
  const { minZ, maxZ, totalLen, centerZ } = getBuildingZBounds();
  const mezzLen = totalLen * (state.mezzLengthPct / 100);
  const halfLen = mezzLen / 2;
  const min = minZ + halfLen;
  const max = maxZ - halfLen;
  if (min > max) return { min: centerZ, max: centerZ };
  return { min, max };
}

function getMezzHeightFromRatio() {
  const ratio = state.mezzHeightRatio === "1_3" ? 1 / 3 : 2 / 3;
  return Math.round(state.height * ratio * 10) / 10;
}

function clampMezzanine() {
  if (!state.showMezzanine) return;
  state.mezzHeight = getMezzHeightFromRatio();
  const posBounds = getMezzPosBounds();
  state.mezzPosZ = Math.max(posBounds.min, Math.min(posBounds.max, state.mezzPosZ ?? 0));
}

function updateSliderRange(input, min, max, value) {
  if (!input) return;
  input.min = String(min);
  input.max = String(max);
  input.value = String(value);
  updateSliderFill(input);
}

function getColumnPositions() {
  const frameCount = Math.ceil(state.length / state.columnStep);
  const totalLen = frameCount * state.columnStep;
  const startZ = -totalLen / 2;
  const positions = [];
  for (let i = 0; i <= frameCount; i++) {
    positions.push(startZ + i * state.columnStep);
  }
  return positions;
}

function avoidColumns(z, halfWidth) {
  const columns = getColumnPositions();
  const margin = halfWidth + 0.2;
  for (const cz of columns) {
    if (Math.abs(z - cz) < margin) {
      z = z < cz ? cz - margin : cz + margin;
    }
  }
  return z;
}

function avoidColumnsX(x) {
  return x;
}

function clampWindows() {
  const { minZ, maxZ } = getBuildingZBounds();
  const winHalfW = 0.75;
  for (const w of state.windows) {
    w.z = Math.max(minZ, Math.min(maxZ, w.z));
    w.z = avoidColumns(w.z, winHalfW);
    w.z = Math.max(minZ, Math.min(maxZ, w.z));
  }
}

function newWindowId() {
  windowIdSeq += 1;
  return `win-${windowIdSeq}`;
}

function isWindowSlotFree(z, wall, ignoreId = null) {
  const winW = 1.5;
  return !state.windows.some(
    (w) => w.wall === wall && w.id !== ignoreId && Math.abs(w.z - z) < winW + 0.05
  );
}

function findNextWindowZ(wall) {
  const { startZ, frameCount, minZ, maxZ } = getBuildingZBounds();
  const step = state.columnStep;

  for (let i = 0; i < frameCount; i++) {
    const z = startZ + step * i + step / 2;
    if (z < minZ || z > maxZ) continue;
    if (isWindowSlotFree(z, wall)) return z;
  }

  for (let z = minZ; z <= maxZ; z += 0.5) {
    if (isWindowSlotFree(z, wall)) return z;
  }

  const offset = state.windows.filter((w) => w.wall === wall).length * 2;
  return Math.max(minZ, Math.min(maxZ, minZ + offset));
}

function addWindow(wall) {
  const z = findNextWindowZ(wall);
  const id = newWindowId();
  state.windows.push({ id, z, wall });
  state.selectedWindowId = id;
  clampWindows();
  syncAll(true);
}

function removeWindow() {
  if (state.windows.length === 0) return;

  let idx = state.windows.findIndex((w) => w.id === state.selectedWindowId);
  if (idx < 0) idx = state.windows.length - 1;

  const removed = state.windows.splice(idx, 1)[0];
  if (state.selectedWindowId === removed.id) {
    state.selectedWindowId = state.windows.length ? state.windows[state.windows.length - 1].id : null;
  }
  syncAll(true);
}

function getParams() {
  return {
    ...state,
    windows: state.windows.map((w) => ({ ...w })),
    ribbonGlazing: state.ribbonGlazing,
    ribbonWall: state.ribbonWall,
  };
}

function updateStats() {
  const frames = Math.ceil(state.length / state.columnStep);
  els.statColumns.textContent = String(frames + 1);
  els.statFrames.textContent = String(frames);
  els.statArea.textContent = String(state.width * state.length);
}

function updateConditionalUI() {
  const show = state.showSandwich;
  els.openingsSection?.classList.toggle("hidden", !show);
  els.claddingColors?.classList.toggle("hidden", !show);
  els.windowTools.classList.toggle("hidden", !show || !state.showWindows);
  if (els.doorSideBtns) els.doorSideBtns.classList.toggle("hidden", !show || !state.showSideDoor);
  if (els.gateHint) els.gateHint.classList.toggle("hidden", !show || !state.showGate);
  if (els.doorHint) els.doorHint.classList.toggle("hidden", !show || !hasAnyDoor());
  els.mezzanineTools?.classList.toggle("hidden", !state.showMezzanine);
  if (!show) {
    state.showWindows = false;
    state.showGate = false;
    state.showSideDoor = false;
    state.showFrontDoor = false;
    state.gateSelected = false;
    state.selectedDoor = null;
    els.windows.checked = false;
    els.gate.checked = false;
    if (els.doorSide) els.doorSide.checked = false;
    if (els.doorFront) els.doorFront.checked = false;
  }
  for (const btn of els.doorWallBtns) {
    btn.classList.toggle("active", btn.dataset.wall === state.sideDoorWall);
  }
  for (const btn of els.mezzWallBtns) {
    btn.classList.toggle("active", btn.dataset.wall === state.mezzWall);
  }
  if (els.doorSide) els.doorSide.checked = false;
  if (els.doorFront) els.doorFront.checked = state.showFrontDoor;
  if (els.ribbonTools) els.ribbonTools.classList.toggle("hidden", !show || !state.ribbonGlazing);
  if (els.ribbonGlazing) els.ribbonGlazing.checked = state.ribbonGlazing;
  for (const btn of els.ribbonWallBtns) {
    btn.classList.toggle("active", state.ribbonWall === "both" ? true : btn.dataset.wall === state.ribbonWall);
  }
  els.windowCount.textContent = String(state.windows.length);
  if (els.removeWindow) {
    els.removeWindow.disabled = state.windows.length === 0;
  }
  if (show && !prevShowSandwich) {
    setAccordionOpen("cladding", true);
    setAccordionOpen("openings", true);
  }
  prevShowSandwich = show;
}

function updateRoofColorUI() {
  const current = ROOF_COLORS.find((c) => c.value === state.roofColor);
  if (els.roofColorName) els.roofColorName.textContent = current ? current.name : "";
  if (!els.roofColorGrid) return;
  for (const btn of els.roofColorGrid.querySelectorAll(".color-btn")) {
    btn.classList.toggle("active", Number(btn.dataset.value) === state.roofColor);
  }
}

function updateColorUI() {
  const current = RAL_COLORS.find((c) => c.value === state.wallColor);
  els.colorName.textContent = current ? current.name : "";
  for (const btn of els.colorGrid.querySelectorAll(".color-btn")) {
    btn.classList.toggle("active", Number(btn.dataset.value) === state.wallColor);
  }
}

const COLUMN_STEP_MIN = 3;
const COLUMN_STEP_MAX = 6;

function normalizeColumnStep(value) {
  if (value === "" || value == null) return null;
  const n = Math.round(Number(value) * 2) / 2; // 0.5 m step
  if (!Number.isFinite(n)) return null;
  return Math.max(COLUMN_STEP_MIN, Math.min(COLUMN_STEP_MAX, n));
}

function setColumnStep(step, immediate = true) {
  const normalized = normalizeColumnStep(step);
  if (normalized == null) {
    updateStepUI();
    return;
  }
  state.columnStep = normalized;
  clampWindows();
  clampGate();
  clampDoors();
  clampMezzanine();
  syncAll(immediate);
}

function updateStepUI() {
  if (els.columnStepVal) els.columnStepVal.textContent = String(state.columnStep);
  if (els.columnStepInput && document.activeElement !== els.columnStepInput) {
    els.columnStepInput.value = String(state.columnStep);
  }
  for (const btn of els.stepBtns) {
    btn.classList.toggle("active", Number(btn.dataset.step) === state.columnStep);
  }
}

function renderScene() {
  if (scene) scene.update(getParams());
}

function scheduleRender(immediate = false) {
  if (renderTimer) {
    clearTimeout(renderTimer);
    renderTimer = null;
  }
  if (immediate) {
    renderScene();
    return;
  }
  renderTimer = setTimeout(() => {
    renderTimer = null;
    renderScene();
  }, 120);
}

function updateSliderFill(input) {
  const min = Number(input.min);
  const max = Number(input.max);
  const val = Number(input.value);
  const pct = ((val - min) / (max - min)) * 100;
  input.style.setProperty("--pct", `${pct}%`);
}

function updateAllSliders() {
  updateSliderFill(els.width);
  updateSliderFill(els.length);
  updateSliderFill(els.height);
  if (els.mezzDepth) updateSliderFill(els.mezzDepth);
  if (els.mezzLength) updateSliderFill(els.mezzLength);
  if (els.mezzPos) updateSliderFill(els.mezzPos);
}

function updateDynamicSliders() {
  if (els.mezzHeightVal) {
    els.mezzHeightVal.textContent = String(Math.round(state.mezzHeight * 10) / 10);
  }
  for (const btn of els.mezzHeightBtns) {
    btn.classList.toggle("active", btn.dataset.ratio === state.mezzHeightRatio);
  }
  if (els.mezzDepth && els.mezzDepthVal) {
    els.mezzDepth.value = String(state.mezzDepthPct);
    els.mezzDepthVal.textContent = String(state.mezzDepthPct);
    updateSliderFill(els.mezzDepth);
  }
  if (els.mezzLength && els.mezzLengthVal) {
    els.mezzLength.value = String(state.mezzLengthPct);
    els.mezzLengthVal.textContent = String(state.mezzLengthPct);
    updateSliderFill(els.mezzLength);
  }
  if (els.mezzPos) {
    const { min, max } = getMezzPosBounds();
    updateSliderRange(els.mezzPos, min, max, state.mezzPosZ);
    if (els.mezzPosVal) els.mezzPosVal.textContent = String(Math.round(state.mezzPosZ * 10) / 10);
  }
}

function syncUI() {
  clampWindows();
  clampGate();
  clampDoors();
  clampMezzanine();
  els.widthVal.textContent = String(state.width);
  els.lengthVal.textContent = String(state.length);
  els.heightVal.textContent = String(state.height);
  updateAllSliders();
  updateDynamicSliders();
  updateStats();
  updateConditionalUI();
  updateColorUI();
  updateRoofColorUI();
  updateStepUI();
}

function syncAll(immediate = false) {
  syncUI();
  scheduleRender(immediate);
}

function buildRoofColorGrid() {
  if (!els.roofColorGrid) return;
  els.roofColorGrid.innerHTML = "";
  for (const c of ROOF_COLORS) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "color-btn";
    btn.title = c.name;
    btn.dataset.value = String(c.value);
    btn.style.backgroundColor = c.hex;
    btn.addEventListener("click", () => {
      state.roofColor = c.value;
      syncAll(true);
    });
    els.roofColorGrid.appendChild(btn);
  }
}

function buildColorGrid() {
  els.colorGrid.innerHTML = "";
  for (const c of RAL_COLORS) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "color-btn";
    btn.title = c.name;
    btn.dataset.value = String(c.value);
    btn.style.backgroundColor = c.hex;
    btn.addEventListener("click", () => {
      state.wallColor = c.value;
      syncAll(true);
    });
    els.colorGrid.appendChild(btn);
  }
}

function bindSlider(input, key, valEl) {
  input.addEventListener("input", () => {
    state[key] = Number(input.value);
    valEl.textContent = String(state[key]);
    updateSliderFill(input);
    updateStats();
    scheduleRender();
  });
  input.addEventListener("change", () => syncAll(true));
}

bindSlider(els.width, "width", els.widthVal);
bindSlider(els.length, "length", els.lengthVal);
bindSlider(els.height, "height", els.heightVal);

for (const btn of els.stepBtns) {
  btn.addEventListener("click", () => {
    setColumnStep(Number(btn.dataset.step), true);
  });
}

els.columnStepInput.addEventListener("input", () => {
  const normalized = normalizeColumnStep(els.columnStepInput.value);
  if (normalized == null || normalized === state.columnStep) return;
  state.columnStep = normalized;
  clampWindows();
  clampGate();
  clampDoors();
  clampMezzanine();
  els.columnStepVal.textContent = String(normalized);
  for (const btn of els.stepBtns) {
    btn.classList.toggle("active", Number(btn.dataset.step) === normalized);
  }
  scheduleRender();
});

els.columnStepInput.addEventListener("change", () => {
  setColumnStep(els.columnStepInput.value, true);
});

els.columnStepInput.addEventListener("blur", () => {
  setColumnStep(els.columnStepInput.value, true);
});

els.sandwich.addEventListener("change", () => {
  state.showSandwich = els.sandwich.checked;
  if (state.showSandwich) setAccordionOpen("cladding", true);
  syncAll(true);
});

els.crane?.addEventListener("change", () => {
  state.showCraneBeam = els.crane.checked;
  if (state.showCraneBeam) {
    state.selectedWindowId = null;
    state.selectedDoor = null;
    state.gateSelected = false;
  }
  syncAll(true);
});

els.mezzanine?.addEventListener("change", () => {
  state.showMezzanine = els.mezzanine.checked;
  if (state.showMezzanine) setAccordionOpen("equipment", true);
  syncAll(true);
});

for (const btn of els.mezzHeightBtns) {
  btn.addEventListener("click", () => {
    state.mezzHeightRatio = btn.dataset.ratio;
    clampMezzanine();
    syncAll(true);
  });
}

if (els.mezzDepth) {
  els.mezzDepth.addEventListener("input", () => {
    state.mezzDepthPct = Number(els.mezzDepth.value);
    if (els.mezzDepthVal) els.mezzDepthVal.textContent = String(state.mezzDepthPct);
    updateSliderFill(els.mezzDepth);
    scheduleRender();
  });
  els.mezzDepth.addEventListener("change", () => syncAll(true));
}

if (els.mezzLength) {
  els.mezzLength.addEventListener("input", () => {
    state.mezzLengthPct = Number(els.mezzLength.value);
    if (els.mezzLengthVal) els.mezzLengthVal.textContent = String(state.mezzLengthPct);
    updateSliderFill(els.mezzLength);
    clampMezzanine();
    updateDynamicSliders();
    scheduleRender();
  });
  els.mezzLength.addEventListener("change", () => syncAll(true));
}

if (els.mezzPos) {
  els.mezzPos.addEventListener("input", () => {
    state.mezzPosZ = Number(els.mezzPos.value);
    if (els.mezzPosVal) els.mezzPosVal.textContent = String(state.mezzPosZ);
    updateSliderFill(els.mezzPos);
    scheduleRender();
  });
  els.mezzPos.addEventListener("change", () => syncAll(true));
}

for (const btn of els.mezzWallBtns) {
  btn.addEventListener("click", () => {
    state.mezzWall = btn.dataset.wall;
    syncAll(true);
  });
}

els.windows.addEventListener("change", () => {
  state.showWindows = els.windows.checked;
  if (state.showWindows && state.windows.length === 0) {
    addWindow("left");
    return;
  }
  syncAll(true);
});

els.gate.addEventListener("change", () => {
  state.showGate = els.gate.checked;
  if (state.showGate) {
    state.gateX = state.gateX ?? 0;
    state.gateSelected = true;
    state.selectedWindowId = null;
    state.selectedDoor = null;
    if (state.showFrontDoor) {
      state.frontDoorPos = getDefaultFrontDoorPos();
    }
  } else {
    state.gateSelected = false;
  }
  syncAll(true);
});

// door-side hidden — no listener needed
els.doorFront?.addEventListener("change", () => {
  state.showFrontDoor = els.doorFront.checked;
  state.showSideDoor = false;
  if (state.showFrontDoor) {
    state.frontDoorPos = state.frontDoorPos ?? getDefaultFrontDoorPos();
    state.selectedDoor = "front";
    state.selectedWindowId = null;
    state.gateSelected = false;
  } else if (state.selectedDoor === "front") {
    state.selectedDoor = null;
  }
  syncAll(true);
});

for (const btn of els.doorWallBtns) {
  btn.addEventListener("click", () => {
    state.sideDoorWall = btn.dataset.wall;
    state.sideDoorPos = getDefaultSideDoorPos();
    state.selectedDoor = "side";
    state.selectedWindowId = null;
    state.gateSelected = false;
    syncAll(true);
  });
}

els.addWindowLeft.addEventListener("click", () => addWindow("left"));
els.addWindowRight.addEventListener("click", () => addWindow("right"));
els.removeWindow.addEventListener("click", () => removeWindow());

// Ribbon glazing
if (els.ribbonGlazing) {
  els.ribbonGlazing.addEventListener("change", () => {
    state.ribbonGlazing = els.ribbonGlazing.checked;
    syncAll(true);
  });
}
for (const btn of els.ribbonWallBtns) {
  btn.addEventListener("click", () => {
    state.ribbonWall = btn.dataset.wall;
    for (const b of els.ribbonWallBtns) {
      b.classList.toggle("active", state.ribbonWall === "both" ? true : b.dataset.wall === state.ribbonWall);
    }
    syncAll(true);
  });
}

buildColorGrid();
buildRoofColorGrid();
initAccordion();
updateStats();
updateConditionalUI();
updateAllSliders();
updateStepUI();
updateRoofColorUI();

scene = new ConfiguratorScene(
  els.container,
  () => {
    els.loading.hidden = true;
  },
  (id, z) => {
    const win = state.windows.find((w) => w.id === id);
    if (win) win.z = z;
    syncAll(true);
  },
  (id) => {
    state.selectedWindowId = id;
    state.gateSelected = false;
    state.selectedDoor = null;
    syncUI();
    scheduleRender(true);
  },
  (x) => {
    state.gateX = x;
    syncAll(true);
  },
  () => {
    state.gateSelected = true;
    state.selectedWindowId = null;
    state.selectedDoor = null;
    syncUI();
    scheduleRender(true);
  },
  (doorId, pos) => {
    if (doorId === "side") state.sideDoorPos = pos;
    else if (doorId === "front") state.frontDoorPos = pos;
    syncAll(true);
  },
  (doorId) => {
    state.selectedDoor = doorId;
    state.selectedWindowId = null;
    state.gateSelected = false;
    syncUI();
    scheduleRender(true);
  }
);

// --- Voice Assistant Bridge ---
window.__configuratorState = state;

window.__applyVoiceAction = function (action) {
  // --- Dimensions ---
  if (action.width !== undefined) {
    const clamped = Math.min(36, Math.max(12, Math.round(action.width / 6) * 6));
    state.width = clamped;
    if (els.width) { els.width.value = clamped; els.widthVal.textContent = clamped; }
  }
  if (action.length !== undefined) {
    const clamped = Math.min(120, Math.max(24, Math.round(action.length / 6) * 6));
    state.length = clamped;
    if (els.length) { els.length.value = clamped; els.lengthVal.textContent = clamped; }
  }
  if (action.height !== undefined) {
    const clamped = Math.min(9, Math.max(4, action.height));
    state.height = clamped;
    if (els.height) { els.height.value = clamped; els.heightVal.textContent = clamped; }
  }

  // --- Column step ---
  if (action.columnStep !== undefined) {
    const clamped = Math.min(COLUMN_STEP_MAX, Math.max(COLUMN_STEP_MIN, Math.round(Number(action.columnStep) * 2) / 2));
    state.columnStep = clamped;
    if (els.columnStepVal) els.columnStepVal.textContent = String(clamped);
    if (els.columnStepInput) els.columnStepInput.value = clamped;
    // Update step buttons active state
    if (els.stepBtns) {
      els.stepBtns.forEach(function(btn) {
        btn.classList.toggle("active", Number(btn.dataset.step) === clamped);
      });
    }
  }

  // --- Cladding ---
  if (action.showSandwich !== undefined) {
    state.showSandwich = action.showSandwich;
    if (els.sandwich) els.sandwich.checked = action.showSandwich;
  }

  // --- Colors ---
  if (action.wallColor !== undefined) {
    state.wallColor = action.wallColor;
    const wallBtn = document.querySelector(`#color-grid .color-btn[data-value="${action.wallColor}"]`);
    if (wallBtn) wallBtn.click();
  }
  if (action.roofColor !== undefined) {
    state.roofColor = action.roofColor;
    const roofBtn = document.querySelector(`#roof-color-grid .color-btn[data-value="${action.roofColor}"]`);
    if (roofBtn) roofBtn.click();
  }

  // --- Gates ---
  if (action.showGate !== undefined) {
    state.showGate = action.showGate;
    if (els.gate) els.gate.checked = action.showGate;
  }

  // --- Doors ---
  if (action.showSideDoor !== undefined) {
    state.showSideDoor = action.showSideDoor;
    if (els.doorSide) els.doorSide.checked = action.showSideDoor;
  }
  if (action.sideDoorWall !== undefined) {
    state.sideDoorWall = action.sideDoorWall;
    // Update door wall buttons
    if (els.doorWallBtns) {
      els.doorWallBtns.forEach(function(btn) {
        btn.classList.toggle("active", btn.dataset.wall === action.sideDoorWall);
      });
    }
  }
  if (action.showFrontDoor !== undefined) {
    state.showFrontDoor = action.showFrontDoor;
    if (els.doorFront) els.doorFront.checked = action.showFrontDoor;
  }

  // --- Windows ---
  if (action.showWindows !== undefined) {
    state.showWindows = action.showWindows;
    if (els.windows) els.windows.checked = action.showWindows;
  }

  // --- Crane beam ---
  if (action.showCraneBeam !== undefined) {
    state.showCraneBeam = action.showCraneBeam;
    if (els.crane) els.crane.checked = action.showCraneBeam;
  }

  // --- Mezzanine ---
  if (action.showMezzanine !== undefined) {
    state.showMezzanine = action.showMezzanine;
    if (els.mezzanine) els.mezzanine.checked = action.showMezzanine;
  }
  if (action.mezzWall !== undefined) {
    state.mezzWall = action.mezzWall;
    if (els.mezzWallBtns) {
      els.mezzWallBtns.forEach(function(btn) {
        btn.classList.toggle("active", btn.dataset.wall === action.mezzWall);
      });
    }
  }
  if (action.mezzHeightRatio !== undefined) {
    state.mezzHeightRatio = action.mezzHeightRatio === "1_3" ? "1_3" : "2_3";
    clampMezzanine();
    for (const btn of els.mezzHeightBtns) {
      btn.classList.toggle("active", btn.dataset.ratio === state.mezzHeightRatio);
    }
    if (els.mezzHeightVal) els.mezzHeightVal.textContent = String(Math.round(state.mezzHeight * 10) / 10);
  }
  if (action.mezzDepthPct !== undefined) {
    const clamped = Math.min(50, Math.max(20, action.mezzDepthPct));
    state.mezzDepthPct = clamped;
    if (els.mezzDepth) { els.mezzDepth.value = clamped; }
    if (els.mezzDepthVal) els.mezzDepthVal.textContent = String(clamped);
  }
  if (action.mezzLengthPct !== undefined) {
    const clamped = Math.min(95, Math.max(30, action.mezzLengthPct));
    state.mezzLengthPct = clamped;
    if (els.mezzLength) { els.mezzLength.value = clamped; }
    if (els.mezzLengthVal) els.mezzLengthVal.textContent = String(clamped);
  }

  syncAll(true);
};

// --- PDF export ---
const btnExportPdf = document.getElementById("btn-export-pdf");

async function exportToPdf() {
  if (!scene || !scene.sceneRef) {
    alert("3D-сцена ещё не загружена.");
    return;
  }
  const { camera, controls, renderer } = scene.sceneRef;
  if (!camera || !controls || !renderer) return;

  // Set a nice isometric-ish angle
  const halfW = state.width / 2;
  const halfL = state.length / 2;
  camera.position.set(halfW * 1.5, state.height * 1.6, halfL * 1.6);
  controls.target.set(0, state.height * 0.35, 0);
  controls.update();
  renderer.render(scene.sceneRef.scene, camera);

  const imgData = renderer.domElement.toDataURL("image/jpeg", 0.92);

  if (typeof window.jspdf === "undefined" || !window.jspdf.jsPDF) {
    alert("Библиотека PDF ещё загружается. Подождите несколько секунд и попробуйте снова.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();

  // Header
  pdf.setFillColor(30, 41, 59);
  pdf.rect(0, 0, pageW, 22, "F");
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);
  pdf.text("MAKSTIL", 14, 13);
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.text("3D-конфигуратор быстровозводимого здания", 14, 18);
  pdf.text("+7 (960) 632-20-61", pageW - 14, 13, { align: "right" });
  pdf.text("www.makstil.ru", pageW - 14, 18, { align: "right" });

  // 3D screenshot
  const margin = 14;
  const imgW = pageW - margin * 2;
  const imgH = pageH - 54;
  pdf.addImage(imgData, "JPEG", margin, 28, imgW, imgH);

  // Parameters
  const quizData = window.__quizData || {};
  pdf.setTextColor(30, 41, 59);
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "bold");
  let y = pageH - 18;
  const sizeText = `Размеры: ${state.width} × ${state.length} × ${state.height} м  |  Площадь: ${state.width * state.length} м²`;
  pdf.text(sizeText, margin, y);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  y += 5;
  const extra = [];
  if (state.showSandwich) extra.push("сэндвич-панели");
  if (state.showGate) extra.push("ворота");
  if (state.showFrontDoor) extra.push("дверь у ворот");
  if (state.showCraneBeam) extra.push("кран-балка");
  if (state.showMezzanine) extra.push(`антресоль (${state.mezzHeightRatio === "1_3" ? "1/3" : "2/3"} колонны)`);
  if (state.showWindows) extra.push("окна");
  if (state.ribbonGlazing) extra.push("ленточное остекление");
  if (quizData.city) extra.push(`г. ${quizData.city}`);
  pdf.text(extra.join("  •  "), margin, y);

  pdf.save(`makstil-angar-${state.width}x${state.length}x${state.height}.pdf`);
}

if (btnExportPdf) btnExportPdf.addEventListener("click", exportToPdf);

// --- Quote modal ---
const btnGetQuote = document.getElementById("btn-get-quote");
const quoteModal = document.getElementById("quote-modal");
const quoteModalClose = document.getElementById("quote-modal-close");
const quoteForm = document.getElementById("quote-form");
const quoteSummary = document.getElementById("quote-summary");
const quoteError = document.getElementById("quote-error");
const quoteSuccess = document.getElementById("quote-success");

function buildQuoteSummary() {
  const parts = [
    `📐 Размеры: ${state.width} × ${state.length} × ${state.height} м`,
    `📊 Площадь: ${Math.round(state.width * state.length)} м²`,
  ];
  if (state.showGate) parts.push(`🚪 Ворота`);
  if (state.showFrontDoor) parts.push(`🚪 Дверь у ворот`);
  if (state.showCraneBeam) parts.push(`🏗️ Кран-балка`);
  if (state.showMezzanine) parts.push(`📦 Антресоль`);
  return parts.join("\n");
}

function openQuoteModal() {
  quoteSummary.textContent = buildQuoteSummary();
  quoteError.classList.add("hidden");
  quoteSuccess.classList.add("hidden");
  const quizData = window.__quizData || {};
  const nameInput = document.getElementById("quote-name");
  const phoneInput = document.getElementById("quote-phone");
  const commentInput = document.getElementById("quote-comment");
  if (nameInput && quizData.clientName) nameInput.value = quizData.clientName;
  if (phoneInput && quizData.phone) phoneInput.value = quizData.phone;
  if (commentInput && Object.keys(quizData).length > 0) {
    const lines = [];
    if (quizData.clientName) lines.push(`Имя: ${quizData.clientName}`);
    if (quizData.city) lines.push(`Город: ${quizData.city} (ветр. ${quizData.windRegion}, снег. ${quizData.snowRegion})`);
    if (quizData.buildingType) lines.push(`Тип здания: ${quizData.buildingType}`);
    if (quizData.purpose) lines.push(`Назначение: ${quizData.purpose}`);
    if (quizData.clientType) lines.push(`Для: ${quizData.clientType === "company" ? "компании" : "себя"}`);
    if (quizData.siteStatus) lines.push(`Участок: ${quizData.siteStatus}`);
    if (quizData.deadline) lines.push(`Сроки: ${quizData.deadline}`);
    if (quizData.gateTransport) lines.push(`Транспорт для ворот: ${quizData.gateTransport}`);
    commentInput.value = lines.join("\n") + (commentInput.value ? "\n\n" + commentInput.value : "");
  }
  quoteModal.classList.remove("hidden");
}

function buildLeadComment(data) {
  const parts = [];
  if (data.clientName) parts.push(`Имя: ${data.clientName}`);
  if (data.city) parts.push(`Город: ${data.city}`);
  if (data.buildingType) parts.push(`Тип: ${data.buildingType}`);
  if (data.purpose) parts.push(`Назначение: ${data.purpose}`);
  if (data.clientType) parts.push(`Для: ${data.clientType === "company" ? "компании" : "себя"}`);
  if (data.siteStatus) parts.push(`Участок: ${data.siteStatus}`);
  if (data.deadline) parts.push(`Срок: ${data.deadline}`);
  if (data.gateTransport) parts.push(`Транспорт для ворот: ${data.gateTransport}`);
  const dims = `${state.width}×${state.length}×${state.height} м`;
  parts.push(`Размеры: ${dims}`);
  return parts.join("\n");
}

window.__sendPartialLead = function sendPartialLead(data) {
  const existingId = sessionStorage.getItem("configurator_lead_id");
  const comment = `[3D Конфигуратор — частичная заявка]\n${buildLeadComment(data)}`;

  if (existingId) {
    // Update existing lead
    fetch("/api/lead-update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        leadId: existingId,
        name: data.clientName || undefined,
        phone: data.phone || undefined,
        comment,
      }),
    }).catch(() => {});
  } else {
    // Create new partial lead
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.clientName || "Не указано",
        phone: data.phone || "не указан (частичная заявка)",
        comment,
      }),
    })
      .then(r => r.json())
      .then(res => {
        if (res.id) sessionStorage.setItem("configurator_lead_id", String(res.id));
      })
      .catch(() => {});
  }
};

window.__updateLeadProgress = function updateLeadProgress(data) {
  const existingId = sessionStorage.getItem("configurator_lead_id");
  if (!existingId) { window.__sendPartialLead(data); return; }
  const comment = `[3D Конфигуратор — обновление]\n${buildLeadComment(data)}`;
  fetch("/api/lead-update", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      leadId: existingId,
      name: data.clientName || undefined,
      phone: data.phone || undefined,
      comment,
    }),
  }).catch(() => {});
};

if (btnGetQuote && quoteModal) {
  btnGetQuote.addEventListener("click", () => {
    const quiz = window.__configuratorQuiz;
    // Phase 3 already completed — open modal directly
    if (!quiz || quiz._phase3Triggered) {
      openQuoteModal();
      return;
    }
    // Open phase 3 quiz first, then show modal on completion
    const origComplete = quiz.onComplete;
    quiz.onComplete = (data, skipped) => {
      window.__quizData = { ...data, skipped };
      if (origComplete) origComplete(data, skipped);
      // Update lead with phone + full data
      if (typeof window.__updateLeadProgress === "function") {
        window.__updateLeadProgress(data);
      }
      openQuoteModal();
      quiz.onComplete = origComplete;
    };
    quiz.open(3);
  });
  quoteModalClose.addEventListener("click", () => quoteModal.classList.add("hidden"));
  quoteModal.addEventListener("click", (e) => { if (e.target === quoteModal) quoteModal.classList.add("hidden"); });

  quoteForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const phone = document.getElementById("quote-phone").value.trim();
    const name = document.getElementById("quote-name").value.trim();
    const comment = document.getElementById("quote-comment").value.trim();
    if (!phone) { quoteError.classList.remove("hidden"); return; }
    quoteError.classList.add("hidden");
    const submitBtn = quoteForm.querySelector(".quote-submit");
    submitBtn.disabled = true;
    submitBtn.textContent = "Отправка...";
    const fullComment = `[3D Конфигуратор]\n${buildQuoteSummary()}${comment ? "\n\n" + comment : ""}`;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, comment: fullComment }),
      });
      if (res.ok) {
        quoteSuccess.classList.remove("hidden");
        submitBtn.textContent = "Отправлено ✓";
      } else {
        throw new Error();
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = "Отправить заявку";
      quoteError.textContent = "Ошибка отправки. Позвоните: +7 (960) 632-20-61";
      quoteError.classList.remove("hidden");
    }
  });
}

// --- Interior camera button ---
const btnInterior = document.getElementById("btn-interior");
let interiorMode = false;

if (btnInterior && scene) {
  btnInterior.addEventListener("click", () => {
    if (!scene || !scene.sceneRef) return;
    const { camera, controls } = scene.sceneRef;
    if (!interiorMode) {
      const halfW = state.width / 2 - 0.8;
      const halfL = state.length / 2 - 0.8;
      const targetY = state.height * 0.45;
      camera.position.set(0, targetY, 0);
      controls.target.set(0, targetY, -1);
      controls.minDistance = 0.1;
      controls.maxDistance = Math.min(halfW, halfL, state.height - 0.5);
      controls.maxPolarAngle = Math.PI - 0.05;
      controls.minPolarAngle = 0.05;
      camera.fov = 85;
      camera.updateProjectionMatrix();
      controls.update();
      btnInterior.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg> Снаружи`;
      interiorMode = true;
    } else {
      camera.fov = 50;
      camera.updateProjectionMatrix();
      camera.position.set(state.width * 0.8, state.height * 1.5, state.length * 0.8);
      controls.target.set(0, state.height / 2, 0);
      controls.minDistance = 10;
      controls.maxDistance = 300;
      controls.maxPolarAngle = Math.PI / 2 - 0.02;
      controls.minPolarAngle = 0;
      controls.update();
      btnInterior.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> Изнутри`;
      interiorMode = false;
    }
  });
}
