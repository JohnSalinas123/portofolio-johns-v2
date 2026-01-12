import { Container, HStack, Stack, Text, VStack } from "@chakra-ui/react";

import classes from "./AboutMe.module.css";
import { DisplayModel } from "./DisplayModel";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei/core";

export function AboutMe() {
	return (
		<>
			<Container>
				<HStack gap={20}>
					<Stack>
						<Text className="section-title">About me</Text>
						<VStack gap={5} className="inter">
							<Text className={classes.text}>
								I’m a recent graduate from California State Polytechnic
								University, Pomona with a{" "}
								<span className="bold">
									Bachelor's Degree in Computer Science
								</span>
								. Through <span className="bold">leading group projects</span>,{" "}
								<span className="bold">internships</span>, and ongoing{" "}
								<span className="bold">self-study</span>, I’ve built a solid
								foundation in software development.
							</Text>
							<Text className={classes.text}>
								I’m passionate about expanding my professional skill set
								alongside my creative hobbies such as{" "}
								<span className="bold">3D modeling</span>,
								<span className="bold"> wood carving</span> , and{" "}
								<span className="bold">digital art</span>. While I’m developing
								these skills, I enjoy the process of learning and continuously
								improving through practice.
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
			</Container>
		</>
	);
}
