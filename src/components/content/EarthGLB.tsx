import * as THREE from "three";
import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		Sphere001_1: THREE.Mesh;
		Sphere001_2: THREE.Mesh;
		Sphere001_3: THREE.Mesh;
		Cube_1: THREE.Mesh;
		Cube_2: THREE.Mesh;
		Cube_3: THREE.Mesh;
		Icosphere003_1: THREE.Mesh;
		Icosphere003_2: THREE.Mesh;
		Icosphere: THREE.Mesh;
		Icosphere002: THREE.Mesh;
		Icosphere003: THREE.Mesh;
		Icosphere004: THREE.Mesh;
		Icosphere005: THREE.Mesh;
		Icosphere006: THREE.Mesh;
		Icosphere007: THREE.Mesh;
		Icosphere008: THREE.Mesh;
		Icosphere009: THREE.Mesh;
		Icosphere010: THREE.Mesh;
		Icosphere011: THREE.Mesh;
	};
	materials: {
		land: THREE.MeshStandardMaterial;
		ocean: THREE.MeshStandardMaterial;
		polar: THREE.MeshStandardMaterial;
		walls: THREE.MeshStandardMaterial;
		roof: THREE.MeshStandardMaterial;
		door: THREE.MeshStandardMaterial;
		moon: THREE.MeshStandardMaterial;
		crater: THREE.MeshStandardMaterial;
		cloud: THREE.MeshStandardMaterial;
	};
};

export function EarthGLB(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF(
		"/models/earth.glb"
	) as unknown as GLTFResult;
	return (
		<group {...props} dispose={null}>
			<group position={[-0.371, 0.637, 0.742]} rotation={[0.745, 0, 0.333]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_1.geometry}
					material={materials.walls}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_2.geometry}
					material={materials.roof}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_3.geometry}
					material={materials.door}
				/>
			</group>
			<group position={[-1.334, 0, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Icosphere003_1.geometry}
					material={materials.moon}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Icosphere003_2.geometry}
					material={materials.crater}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere.geometry}
				material={materials.cloud}
				position={[0.457, -0.111, 1.098]}
				rotation={[1.688, 0.016, -0.47]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere002.geometry}
				material={materials.cloud}
				position={[0.712, -0.167, 0.937]}
				rotation={[-1.897, 0.865, -2.455]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere003.geometry}
				material={materials.cloud}
				position={[0.457, -0.498, 1.003]}
				rotation={[2.074, 0.016, -0.47]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere004.geometry}
				material={materials.cloud}
				position={[1.088, 0.446, -0.035]}
				rotation={[-0.031, 0.046, -1.169]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere005.geometry}
				material={materials.cloud}
				position={[1.149, 0.247, -0.218]}
				rotation={[0.227, 0.231, 1.604]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere006.geometry}
				material={materials.cloud}
				position={[1.08, 0.319, -0.398]}
				rotation={[2.074, 0.016, 1.024]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere007.geometry}
				material={materials.cloud}
				position={[-0.014, 0.661, -0.982]}
				rotation={[-1.394, 1.163, 0.322]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere008.geometry}
				material={materials.cloud}
				position={[-0.127, 0.842, -0.837]}
				rotation={[-1.394, 1.163, 0.514]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere009.geometry}
				material={materials.cloud}
				position={[0.083, 0.913, -0.773]}
				rotation={[-0.72, 0.025, 0.125]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere010.geometry}
				material={materials.cloud}
				position={[-0.138, 1.024, 0.525]}
				rotation={[0.025, 1.163, 0.573]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere011.geometry}
				material={materials.cloud}
				position={[0.028, 0.936, 0.705]}
				rotation={[-2.356, 1.269, 2.991]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Sphere001_1.geometry}
				material={materials.land}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Sphere001_2.geometry}
				material={materials.ocean}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Sphere001_3.geometry}
				material={materials.polar}
			/>
		</group>
	);
}

useGLTF.preload("/earth.glb");
