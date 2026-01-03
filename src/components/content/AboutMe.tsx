import { Container, HStack, Stack, Text, VStack } from "@chakra-ui/react";

import classes from "./AboutMe.module.css";

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
								<span className="colored-text">
									Bachelor's Degree in Computer Science
								</span>
								. Through{" "}
								<span className="colored-text">leading group projects</span>,{" "}
								<span className="colored-text">internships</span>, and ongoing{" "}
								<span className="colored-text">self-study</span>, I’ve built a
								solid foundation in software development.
							</Text>
							<Text className={classes.text}>
								I’m passionate about expanding my professional skill set
								alongside my creative hobbies such as{" "}
								<span className="colored-text">3D modeling</span>,
								<span className="colored-text"> wood carving</span> , and{" "}
								<span className="colored-text">digital art</span>. While I’m
								developing these skills, I enjoy the process of learning and
								continuously improving through practice.
							</Text>
						</VStack>
					</Stack>
					<div className={classes["model-placeholder"]}></div>
				</HStack>
			</Container>
		</>
	);
}
