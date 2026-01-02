import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

import vertexShader from "../shaders/stars/vertex.glsl";
import fragmentShader from "../shaders/stars/fragment.glsl";

type StarsParameters = {
	count: number;
	boxSize: number;
	objectDistance: number;
};

type StarsAttributes = {
	positions: Float32Array;
	scales: Float32Array;
	randomness: Float32Array;
};

export function StarsBackground({
	count = 3000,
	boxSize = 10,
	objectDistance = 4,
}: StarsParameters) {
	const materialRef = useRef<THREE.ShaderMaterial>(null);
	const { gl } = useThree();

	/**
	 * Attributes
	 */
	const [attributes] = useState<StarsAttributes>(() => {
		const positions = new Float32Array(count * 3);
		const scales = new Float32Array(count * 1);
		const randomness = new Float32Array(count * 3);

		for (let i = 0; i < count; i++) {
			const i3 = i * 3;
			positions[i3] = 0;
			positions[i3 + 1] = 0;
			positions[i3 + 2] = 0;

			// Randomness
			const randomX = (Math.random() - 0.5) * boxSize;
			const randomY = objectDistance * 0.5 - Math.random() * objectDistance * 3;
			const randomZ = (Math.random() - 0.5) * boxSize;

			randomness[i3 + 0] = randomX;
			randomness[i3 + 1] = randomY;
			randomness[i3 + 2] = randomZ;

			scales[i] = Math.random();
		}

		return {
			positions,
			scales,
			randomness,
		};
	});

	/**
	 * Animation Loop
	 */
	useFrame(({ clock }) => {
		if (materialRef.current) {
			materialRef.current.uniforms.uTime.value = clock.elapsedTime;
		}
	});

	return (
		<points frustumCulled={false}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					args={[attributes.positions, 3]}
					count={count}
				/>
				<bufferAttribute
					attach="attributes-aScale"
					args={[attributes.scales, 1]}
					count={count}
				/>
				<bufferAttribute
					attach="attributes-aRandomness"
					args={[attributes.randomness, 3]}
					count={count}
				/>
			</bufferGeometry>
			<shaderMaterial
				ref={materialRef}
				transparent
				depthWrite={false}
				vertexColors={true}
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				uniforms={{
					uTime: { value: 0 },
					uSize: { value: 30 * gl.getPixelRatio() },
				}}
			/>
		</points>
	);
}
