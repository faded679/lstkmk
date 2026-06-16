"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface FrameConfig {
  width: number;
  length: number;
  height: number;
  columnStep: number;
  trussHeight: number;
}

interface BuildingFrameProps {
  config: FrameConfig;
  showSandwich: boolean;
}

const STEEL_COLOR = 0x4a5568;
const STEEL_HIGHLIGHT = 0x64748b;
const SANDWICH_COLOR = 0xf7fafc;

export default function BuildingFrame({ config, showSandwich }: BuildingFrameProps) {
  const { width, length, height, columnStep, trussHeight } = config;

  const columnCount = useMemo(() => Math.ceil(length / columnStep) + 1, [length, columnStep]);
  const columnPositions = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < columnCount; i++) {
      positions.push((i * columnStep) - length / 2);
    }
    return positions;
  }, [columnCount, length, columnStep]);

  return (
    <group>
      {columnPositions.map((z, index) => (
        <group key={`frame-${index}`}>
          <Column position={[-width / 2, height / 2, z]} height={height} />
          <Column position={[width / 2, height / 2, z]} height={height} />
          {index < columnCount && (
            <Righel start={[-width / 2, height, z]} end={[width / 2, height, z]} />
          )}
        </group>
      ))}

      {columnPositions.slice(0, -1).map((z, index) => (
        <Truss
          key={`truss-${index}`}
          start={[-width / 2, height, z]}
          end={[-width / 2, height, z + columnStep]}
          width={width}
          trussHeight={trussHeight}
        />
      ))}

      <TrussConnections 
        columnPositions={columnPositions}
        width={width}
        height={height}
        trussHeight={trussHeight}
      />

      {showSandwich && (
        <>
          <WallPanels width={width} length={length} height={height} side="left" />
          <WallPanels width={width} length={length} height={height} side="right" />
          <RoofPanels width={width} length={length} height={height} trussHeight={trussHeight} />
        </>
      )}
    </group>
  );
}

function Column({ position, height }: { position: [number, number, number]; height: number }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[0.2, height, 0.15]} />
      <meshStandardMaterial color={STEEL_COLOR} roughness={0.4} metalness={0.6} />
    </mesh>
  );
}

function Righel({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const center: [number, number, number] = [
    (start[0] + end[0]) / 2,
    start[1],
    start[2]
  ];
  const length = Math.sqrt(Math.pow(end[0] - start[0], 2) + Math.pow(end[2] - start[2], 2));
  
  return (
    <mesh position={center} castShadow receiveShadow>
      <boxGeometry args={[length, 0.15, 0.1]} />
      <meshStandardMaterial color={STEEL_HIGHLIGHT} roughness={0.4} metalness={0.6} />
    </mesh>
  );
}

function Truss({ start, end, width, trussHeight }: { 
  start: [number, number, number];
  end: [number, number, number];
  width: number;
  trussHeight: number;
}) {
  const length = Math.sqrt(Math.pow(end[2] - start[2], 2));
  
  return (
    <group>
      <mesh position={[0, start[1], (start[2] + end[2]) / 2]} castShadow>
        <boxGeometry args={[0.1, 0.1, length]} />
        <meshStandardMaterial color={STEEL_COLOR} roughness={0.4} metalness={0.6} />
      </mesh>
      
      <mesh position={[0, start[1] + trussHeight, (start[2] + end[2]) / 2]} castShadow>
        <boxGeometry args={[0.08, 0.08, length]} />
        <meshStandardMaterial color={STEEL_HIGHLIGHT} roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  );
}

function TrussConnections({ 
  columnPositions, width, height, trussHeight 
}: { 
  columnPositions: number[];
  width: number;
  height: number;
  trussHeight: number;
}) {
  return (
    <>
      {columnPositions.slice(1, -1).map((z, i) => (
        <mesh key={`conn-left-${i}`} position={[-width / 2, height + trussHeight / 2, z]} castShadow>
          <boxGeometry args={[0.05, trussHeight, 0.05]} />
          <meshStandardMaterial color={STEEL_COLOR} roughness={0.4} metalness={0.6} />
        </mesh>
      ))}
      {columnPositions.slice(1, -1).map((z, i) => (
        <mesh key={`conn-right-${i}`} position={[width / 2, height + trussHeight / 2, z]} castShadow>
          <boxGeometry args={[0.05, trussHeight, 0.05]} />
          <meshStandardMaterial color={STEEL_COLOR} roughness={0.4} metalness={0.6} />
        </mesh>
      ))}
    </>
  );
}

function WallPanels({ width, length, height, side }: { width: number; length: number; height: number; side: "left" | "right" }) {
  const x = side === "left" ? -width / 2 - 0.1 : width / 2 + 0.1;
  return (
    <mesh position={[x, height / 2, 0]} receiveShadow>
      <boxGeometry args={[0.1, height, length]} />
      <meshStandardMaterial color={SANDWICH_COLOR} roughness={0.8} metalness={0.1} />
    </mesh>
  );
}

function RoofPanels({ width, length, height, trussHeight }: { width: number; length: number; height: number; trussHeight: number }) {
  const roofHeight = height + trussHeight + 0.1;
  const slopeLength = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(trussHeight, 2));
  const angle = Math.atan(trussHeight / (width / 2));
  
  return (
    <group>
      <mesh position={[-width / 4, roofHeight - trussHeight / 2, 0]} rotation={[0, 0, angle]} receiveShadow>
        <boxGeometry args={[slopeLength, 0.08, length]} />
        <meshStandardMaterial color={SANDWICH_COLOR} roughness={0.8} metalness={0.1} />
      </mesh>
      <mesh position={[width / 4, roofHeight - trussHeight / 2, 0]} rotation={[0, 0, -angle]} receiveShadow>
        <boxGeometry args={[slopeLength, 0.08, length]} />
        <meshStandardMaterial color={SANDWICH_COLOR} roughness={0.8} metalness={0.1} />
      </mesh>
    </group>
  );
}
