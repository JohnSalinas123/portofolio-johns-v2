import { Container, Flex, Stack, Text, VStack } from "@chakra-ui/react";

import classes from "./Experience.module.css";

import experienceData from "../../data/experience.json";

export function Experience() {
	return (
		<>
			<div id="experience-section" className={classes.experience}>
				<Stack className="section" align={{ base: "center", md: "normal" }}>
					<Text className="section-title"> Experience</Text>
					<Stack mt={10} gap={12} align={{ base: "center", lg: "normal" }}>
						{experienceData.map((experience) => (
							<ExperienceItem
								dateText={experience.date}
								titleText={experience.title}
								companyText={experience.company}
								descriptionText={experience.description}
								skillsArray={experience.skills.map((s) => s.name)}
							/>
						))}
					</Stack>
				</Stack>
			</div>
		</>
	);
}

interface ExperienceItemProps {
	dateText: string;
	titleText: string;
	companyText: string;
	descriptionText: string;
	skillsArray: string[];
}

function ExperienceItem({
	dateText,
	titleText,
	companyText,
	descriptionText,
	skillsArray,
}: ExperienceItemProps) {
	return (
		<>
			<Stack
				direction={{ base: "column", md: "column", lg: "row" }}
				align="start"
				justify="space-between"
				style={{ width: "100%" }}
			>
				<Text className={classes.date}>{dateText}</Text>
				<VStack align="start" pl={{ base: "0px" }} className={classes.content}>
					<Text className={classes.title}>
						{titleText}
						<span className="dark-text"> @ </span>
						<span className="colored-text">{companyText}</span>
					</Text>
					<Container pl={3} className="inter">
						<Text className={classes.description}>{descriptionText}</Text>
					</Container>
					<Flex gap={2} wrap="wrap" mt={2}>
						{skillsArray.map((skillStr) => (
							<div key={skillStr} className="skill">
								<Text>{skillStr}</Text>
							</div>
						))}
					</Flex>
				</VStack>
			</Stack>
		</>
	);
}
