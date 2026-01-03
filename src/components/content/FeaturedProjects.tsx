import {
	Container,
	Stack,
	Text,
	VStack,
	Image,
	SimpleGrid,
} from "@chakra-ui/react";

import linguachatImage from "../../assets/linguachat_image.png";
import weeklyImage from "../../assets/weekly_image.png";
import cppeventmapImage from "../../assets/cppeventmap_image.png";
import mybookshelfImage from "../../assets/mybookshelf_image.png";
import appTrackImage from "../../assets/appTrack_image.png";

import classes from "./FeaturesProjects.module.css";

export function FeaturedProjects() {
	return (
		<>
			<Container>
				<Stack align="start">
					<Text className="section-title"> Featured Projects</Text>
					<Container>
						<SimpleGrid justifyItems="center" columns={3} gap="32px">
							<ProjectItem
								imageSrc={linguachatImage}
								titleText={"LinguaChat"}
								descriptionText={
									"A real-time chat translation app designed to bridge language barriers."
								}
								subDescriptionText={
									"→ As an aspiring traveler I focused on making the chat invitation process easy to initiate and therefore allow for the app to be used on the go."
								}
							/>
							<ProjectItem
								imageSrc={weeklyImage}
								titleText={"Weekly"}
								descriptionText={
									"A mobile application to help bring friends together for events and activities. "
								}
								subDescriptionText={
									"→ As part of the iOS development team I took ownership of several components including status updates, event invitations, chat features, and availability management."
								}
							/>
							<ProjectItem
								imageSrc={cppeventmapImage}
								titleText={"CPPEventMap"}
								descriptionText={
									"A web application for students of Cal Poly Pomona to easily find where events are occurring on or near campus."
								}
								subDescriptionText={
									"→ As team lead of 5 peers, I led development effectively by bringing my team together to plan out the core features of the application, delegating tasks, and creating mockups using Figma."
								}
							/>
							<ProjectItem
								imageSrc={appTrackImage}
								titleText={"AppTrack"}
								descriptionText={
									"A web application to help keep track and visualize job applications."
								}
								subDescriptionText={
									"→ As someone early in my career I created this focused app both for learning purposes and to help me in the job hunt."
								}
							/>
							<ProjectItem
								imageSrc={mybookshelfImage}
								titleText={"MyBookShelf"}
								descriptionText={
									"A desktop electron app to help organize pdf e-books and help with the e-reading experience."
								}
								subDescriptionText={
									"→ As a lifelong learner who enjoys reading learning material I wanted a better library-like experience and didn’t want to just keep opening my pdf books from the file explorer."
								}
							/>
							<ProjectItem
								imageSrc={linguachatImage}
								titleText={""}
								descriptionText={""}
								subDescriptionText={""}
							/>
						</SimpleGrid>
					</Container>
				</Stack>
			</Container>
		</>
	);
}

interface ProjectItemProps {
	imageSrc: string;
	titleText: string;
	descriptionText: string;
	subDescriptionText: string;
}

function ProjectItem({
	imageSrc,
	titleText,
	descriptionText,
	subDescriptionText,
}: ProjectItemProps) {
	return (
		<>
			<VStack align="start" className={classes.container} gap={0}>
				<Image className={classes.image} src={imageSrc} />
				<Text className={`${classes.title} jetbrains-mono`}>{titleText}</Text>
				<Text className={classes.description}>{descriptionText}</Text>
				<Text className={`${classes["sub-description"]} faded-text`}>
					{subDescriptionText}
				</Text>
			</VStack>
		</>
	);
}
