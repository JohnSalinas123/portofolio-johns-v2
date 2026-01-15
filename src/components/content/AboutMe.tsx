import { Container, HStack, Stack, Text, VStack } from "@chakra-ui/react";

import classes from "./AboutMe.module.css";
import { DisplayModel } from "./DisplayModel";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei/core";
import { CameraRig } from "../CameraRig";
import { StarsBackground } from "../StarsBackground";

export function AboutMe() {
	return (
		<>
			<div className={classes.aboutme}>
				<div className={classes.canvasBackground}>
					<Canvas eventSource={document.body} eventPrefix="client">
						<CameraRig objectDistance={4} />
						<StarsBackground count={1000} boxSize={10} objectDistance={3} />
					</Canvas>
				</div>

				<HStack gap={20} className={classes.window}>
					<Stack>
						<Text className="section-title">About me</Text>
						<VStack gap={5} className="inter">
							<Text className={classes.text}>
								I’m a graduate from California State Polytechnic University,
								Pomona with a Bachelor's Degree in Computer Science . Through{" "}
								<span className="bold">leading group projects</span>,{" "}
								<span className="bold">internships</span>, and ongoing{" "}
								<span className="bold">self-study</span>, I’ve built a solid
								foundation in software development.
							</Text>
							<Text className={classes.text}>
								I’m passionate about expanding my professional skill set
								alongside my creative hobbies such as 3D modeling, wood carving
								, and digital art. While I’m developing these skills, I enjoy
								the process of learning and continuously improving through
								practice.
							</Text>
						</VStack>
					</Stack>
					<div className={classes["model-placeholder"]}>
						<Canvas gl={{ alpha: true }} style={{ background: "transparent" }}>
							<DisplayModel />
							<PerspectiveCamera makeDefault fov={10} position={[0, 0, 44]} />
						</Canvas>
					</div>
				</HStack>
			</div>
		</>
	);
}
