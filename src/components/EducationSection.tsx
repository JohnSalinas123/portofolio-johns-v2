import { Stack, Text, VStack } from "@chakra-ui/react";

import classes from "./EducationSection.module.css";

import educationData from "../data/education.json";

export function EducationSection() {
	return (
		<>
			<Stack
				className={[classes.education, "section"].join(" ")}
				align={{ base: "center", md: "normal" }}
				paddingLeft={{ base: "20px", sm: "40px" }}
				paddingRight={{ base: "20px", sm: "40px" }}
				paddingTop={45}
			>
				<Text className="section-title"> Education</Text>
				<Stack mt={10} gap={12} align={{ base: "center", md: "normal" }}>
					{educationData.map((education) => (
						<EducationItem
							dateText={education.date}
							titleText={education.title}
							descriptionText={education.institution}
						/>
					))}
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
				<VStack
					align="start"
					className={classes.content}
					width={{ base: "250px", sm: "400px" }}
				>
					<Text className={classes.title}>{titleText}</Text>
					<Text pl={3} className={`${classes.description} colored-text`}>
						{descriptionText}
					</Text>
				</VStack>
			</Stack>
		</>
	);
}
