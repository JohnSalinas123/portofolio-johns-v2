import { Stack, Text, VStack } from "@chakra-ui/react";

import classes from "./AboutMe.module.css";
import { DisplayModel } from "./DisplayModel";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei/core";
import { CameraRig } from "../CameraRig";
import { StarsBackground } from "../StarsBackground";
import { useEffect, useRef, useState } from "react";

export function AboutMe() {
	const navRef = useRef<HTMLDivElement | null>(null);
	const [navHeight, setNavHeight] = useState<number>(0);

	useEffect(() => {
		if (navRef.current) {
			setNavHeight(navRef.current.offsetHeight);
		}
	}, []);

	return (
		<>
			<div className={classes.aboutme} style={{ paddingTop: navHeight + 88 }}>
				<div className="stars-background-box">
					<Canvas eventSource={document.body} eventPrefix="client">
						<CameraRig objectDistance={4} />
						<StarsBackground count={2000} boxSize={10} objectDistance={3} />
					</Canvas>
				</div>
				<div className={classes.innerContainer}>
					<Stack
						gap={20}
						className={classes.window}
						direction={{ base: "column", md: "column", lg: "row" }}
					>
						<VStack align="start" gap={2}>
							<Text
								className={classes.title}
								style={{ textDecoration: "underline" }}
							>
								Hi, I'm John!
							</Text>
							<Text className={classes.text}>
								I’m driven by the challenge of turning ideas into intuitive
								software people enjoy using. I focus on building thoughtful,
								maintainable solutions while continuously growing my technical
								skills.
							</Text>
						</VStack>
						<div className={classes["model-placeholder"]}>
							<Canvas
								gl={{ alpha: true }}
								style={{ background: "transparent" }}
							>
								<DisplayModel />
								<PerspectiveCamera makeDefault fov={10} position={[0, 0, 44]} />
							</Canvas>
						</div>
					</Stack>
				</div>
			</div>
		</>
	);
}
