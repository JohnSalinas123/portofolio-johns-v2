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

	const cursor = useRef({ x: 0, y: 0 });
	const scrollY = useRef(0);

	useEffect(() => {
		const onScroll = () => {
			scrollY.current = window.scrollY;
		};

		window.addEventListener("mousemove", (event) => {
			cursor.current.x = event.clientX / size.width - 0.5;
			cursor.current.y = event.clientY / size.height - 0.5;
			// console.log("mouse move");
		});

		// Scroll
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [size.height, size.width]);

	useFrame(({ camera, size }) => {
		camera.position.y = (-scrollY.current / size.height) * objectDistance;
	});

	useFrame((_, delta) => {
		if (!group.current) return;

		group.current.position.x +=
			(cursor.current.x - group.current?.position.x) * 5 * delta;
		group.current.position.y +=
			(-cursor.current.y - group.current?.position.y) * 5 * delta;
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
