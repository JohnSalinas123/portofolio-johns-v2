import { Container, Stack, Text, VStack } from "@chakra-ui/react";

import classes from "./Education.module.css";

export function Education() {
	return (
		<>
			<Stack
				className={[classes.education, "section"].join(" ")}
				align={{ base: "center", md: "normal" }}
			>
				<Text className="section-title"> Education</Text>
				<Stack mt={10} gap={12} align={{ base: "center", md: "normal" }}>
					<EducationItem
						dateText={"07/2024 - 09/2024"}
						titleText={"Machine Learning Specialization by Andrew Ng"}
						descriptionText={"Coursera"}
					/>

					<EducationItem
						dateText={"06/2022 - 08/2022"}
						titleText={"Advanced Software Engineering Course"}
						descriptionText={"CodePath"}
					/>
					<EducationItem
						dateText={"08/2021 - 12/2023"}
						titleText={"Bachelor of Science in Computer Science"}
						descriptionText={"California State Polytechnic University, Pomona"}
					/>
					<EducationItem
						dateText={"02/2018 - 06/2021"}
						titleText={"Associate of Science in Computer Science"}
						descriptionText={"Santa Monica College"}
					/>
				</Stack>
			</Stack>
		</>
	);
}

interface EducationItemProps {
	dateText: string;
	titleText: string;
	descriptionText: string;
}

function EducationItem({
	dateText,
	titleText,
	descriptionText,
}: EducationItemProps) {
	return (
		<>
			<Stack
				direction={{ base: "column", md: "column", lg: "row" }}
				align="start"
				justify="space-between"
			>
				<Text className={`${classes.date} jetbrains-mono`}>{dateText}</Text>
				<VStack align="start" className={classes.content}>
					<Text className={classes.title}>{titleText}</Text>
					<Text pl={3} className={`${classes.description} colored-text`}>
						{descriptionText}
					</Text>
				</VStack>
			</Stack>
		</>
	);
}
