import * as THREE from "three";
import { useEffect, type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		Sphere001_1: THREE.Mesh;
		Sphere001_2: THREE.Mesh;
		Sphere001_3: THREE.Mesh;
	};
	materials: {
		Land: THREE.MeshStandardMaterial;
		Ocean: THREE.MeshStandardMaterial;
		Polar: THREE.MeshStandardMaterial;
	};
};

export function EarthGLB(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF(
		"/models/earth.glb"
	) as unknown as GLTFResult;

	useEffect(() => {
		Object.values(materials).forEach((mat) => {
			if (mat instanceof THREE.MeshStandardMaterial) {
				mat.metalness = 0.8;
				mat.roughness = 0.7;
				mat.needsUpdate = true;
			}
		});
	}, [materials]);
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Sphere001_1.geometry}
				material={materials.Land}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Sphere001_2.geometry}
				material={materials.Ocean}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Sphere001_3.geometry}
				material={materials.Polar}
			/>
		</group>
	);
}

useGLTF.preload("/earth.glb");
