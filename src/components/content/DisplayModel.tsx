import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { EarthGLB } from "./EarthGLB";

import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { KernelSize, Resolution } from "postprocessing";
// import { Environment } from "@react-three/drei";
// import { PrecompiledEnvironment } from "./PrecompiledEnvironent";

export function DisplayModel() {
	const myMesh = useRef<THREE.Mesh>(null);

	useFrame((_, delta) => {
		if (myMesh.current == null) return;
		myMesh.current.rotateY(delta * 0.5);
	});

	return (
		<>
			<group
				ref={myMesh}
				rotation={[0, 0, THREE.MathUtils.degToRad(-23.44)]}
				position={[0, 0, -0.25]}
				scale={3}
			>
				<EarthGLB />
			</group>

			<ambientLight intensity={3} />
			<directionalLight intensity={2} position={[-10, 0, 7]} />
			<directionalLight intensity={2} position={[10, 0, 7]} />
			<directionalLight intensity={2} position={[0, -10, 7]} />
			<directionalLight intensity={2} position={[0, 10, 7]} />

			<EffectComposer>
				<Bloom
					intensity={0.1}
					blurPass={undefined}
					kernelSize={KernelSize.LARGE}
					luminanceThreshold={0.3}
					luminanceSmoothing={0.025}
					mipmapBlur={false}
					resolutionX={Resolution.AUTO_SIZE}
					resolutionY={Resolution.AUTO_SIZE}
				/>
			</EffectComposer>
			<RenderCheck />
		</>
	);
}

function RenderCheck() {
	console.log("RENDER");

	return <></>;
}
