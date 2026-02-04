import { Flex, List, Stack, Text, VStack } from "@chakra-ui/react";

import classes from "./ExperienceSection.module.css";

import experienceData from "../data/experience.json";

export function ExperienceSection() {
	return (
		<>
			<div id="experience-section" className={classes.experience}>
				<Stack
					align={{ base: "center", md: "normal" }}
					paddingLeft={{ base: "20px", sm: "40px" }}
					paddingRight={{ base: "20px", sm: "40px" }}
					paddingTop={45}
				>
					<Text className="section-title"> Experience</Text>
					<Stack mt={10} gap={12} align={{ base: "center", lg: "normal" }}>
						{experienceData.map((experience) => (
							<ExperienceItem
								dateText={experience.date}
								titleText={experience.title}
								companyText={experience.company}
								bulletPoints={experience.bullet_points}
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
	bulletPoints: {
		text: string;
	}[];
	skillsArray: string[];
}

function ExperienceItem({
	dateText,
	titleText,
	companyText,
	bulletPoints,
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
					<VStack pl={3}>
						<List.Root>
							{bulletPoints.map((item) => (
								<List.Item>{item.text}</List.Item>
							))}
						</List.Root>
					</VStack>
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
