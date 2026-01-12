import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type CameraRigProps = {
	objectDistance: number;
};

export function CameraRig({ objectDistance }: CameraRigProps) {
	const group = useRef<THREE.Group>(null);
	const { size } = useThree();

	const scrollY = useRef(0);

	useEffect(() => {
		const onScroll = () => {
			scrollY.current = window.scrollY;
		};

		// Scroll
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [size.height, size.width]);

	useFrame(({ camera, size }) => {
		camera.position.y = (-scrollY.current / size.height) * objectDistance;
	});

	return (
		<group ref={group}>
			<PerspectiveCamera
				makeDefault
				fov={35}
				position={[0, 0, 6]}
				near={0.1}
				far={100}
			/>
		</group>
	);
}
