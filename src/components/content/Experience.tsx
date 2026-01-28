import { Container, Flex, Stack, Text, VStack } from "@chakra-ui/react";

import classes from "./Experience.module.css";

export function Experience() {
	return (
		<>
			<div id="experience-section" className={classes.experience}>
				<Stack className="section" align={{ base: "center", md: "normal" }}>
					<Text className="section-title"> Experience</Text>
					<Stack mt={10} gap={12} align={{ base: "center", lg: "normal" }}>
						<ExperienceItem
							dateText={"07/2023 - 08/2023"}
							titleText={"Software Engineering Intern"}
							companyText={"Verisk Analytics"}
							descriptionText={
								"Worked with the ServiceNow team to create applications for internal clients, tailoring solutions to business needs, and improving process efficiency. This involved collaborating directly with stakeholders and iterating with them through the development process when needed. Additionally, performed quality assurance testing on existing applications before shipping to production."
							}
							skillsArray={["ServiceNow", "Javascript", "Docker"]}
						/>
						<ExperienceItem
							dateText={"11/2022 - 09/2023"}
							titleText={"Technical Project Lead"}
							companyText={"Google Developer Student Club CPP"}
							descriptionText={
								"Worked with multiple teams on technical projects, including several associated with the Google Solutions Challenge. Managed teams to ensure they stay on track to meet project goals, and assisted team leads with project management tools to help their teams work efficiently. Additionally, supported club leadership by providing feedback and suggestions to improve event messaging across social media and other communication platforms."
							}
							skillsArray={["Leadership", "Figma"]}
						/>
						<ExperienceItem
							dateText={"02/2022 - 06/2023"}
							titleText={"IOS Developer Intern"}
							companyText={"Weekly: Calendar for friends"}
							descriptionText={
								"Worked as part of the iOS development team to build key features essential to app functionality using Swift and SwiftUI. Participated in weekly planning meetings to discuss feature design and implementation. Contributed to features such as status updates, availability management, and event invitations. Integrated third-party APIs, such as Google Places for event location autocomplete and Apple Calendar. Additionally, worked on real-time communication features using WebSockets, including group invites, GIF messaging, and chat delivery statuses."
							}
							skillsArray={["Swift", "SwiftUI", "Django"]}
						/>
						<ExperienceItem
							dateText={"07/2019 - 07/2020"}
							titleText={"Computer Lab Assistant"}
							companyText={"Santa Monica College"}
							descriptionText={
								"Supervised a computer lab in the Life & Physical Science department, assisting students with technical or software issues. Provided support to professors using the computer lab for classes and maintained lab equipment and resources. Set up computers throughout the department buildings over the summer, including desktops, monitors, and peripherals, to prepare for upcoming semester classes."
							}
							skillsArray={[
								"Supervision",
								"Software Troubleshooting",
								"Hardware Installation",
							]}
						/>
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
