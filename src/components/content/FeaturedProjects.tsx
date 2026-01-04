import {
	Container,
	Stack,
	Text,
	VStack,
	Image,
	SimpleGrid,
	Flex,
	Icon,
	HStack,
	Link,
} from "@chakra-ui/react";

import linguachatImage from "../../assets/linguachat_image.png";
import weeklyImage from "../../assets/weekly_image.png";
import cppeventmapImage from "../../assets/cppeventmap_image.png";
import mybookshelfImage from "../../assets/mybookshelf_image.png";
import appTrackImage from "../../assets/appTrack_image.png";

import { FaGithub } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";

import classes from "./FeaturesProjects.module.css";

import type { ReactNode } from "react";

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
								skillsArray={[
									"React",
									"CSS",
									"PyTorch",
									"Gin",
									"Go",
									"PostgreSQL",
								]}
								linksArray={[
									{
										enabled: true,
										icon: <FaGithub />,
										text: "GitHub",
										url: "https://github.com/JohnSalinas123/linguachat-frontend",
									},
								]}
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
								skillsArray={[
									"React",
									"CSS",
									"PyTorch",
									"Gin",
									"Go",
									"PostgreSQL",
								]}
								linksArray={[
									{
										enabled: false,
										icon: <IoLogoAppleAppstore />,
										text: "App Store",
										url: "https://apps.apple.com/us/app/weekly-calendar-for-friends/id1596555762",
									},
								]}
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
								skillsArray={[
									"React",
									"CSS",
									"PyTorch",
									"Gin",
									"Go",
									"PostgreSQL",
								]}
								linksArray={[
									{
										enabled: true,
										icon: <FaGithub />,
										text: "GitHub",
										url: "https://github.com/FiveFineCoders/CPP_EventMap",
									},
								]}
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
								skillsArray={[
									"React",
									"CSS",
									"PyTorch",
									"Gin",
									"Go",
									"PostgreSQL",
								]}
								linksArray={[
									{
										enabled: true,
										icon: <FaGithub />,
										text: "GitHub",
										url: "https://github.com/JohnSalinas123/AppTrack",
									},
								]}
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
								skillsArray={[
									"React",
									"CSS",
									"PyTorch",
									"Gin",
									"Go",
									"PostgreSQL",
								]}
								linksArray={[
									{
										enabled: true,
										icon: <FaGithub />,
										text: "GitHub",
										url: "https://github.com/JohnSalinas123/mybookshelf-2",
									},
								]}
							/>
						</SimpleGrid>
					</Container>
				</Stack>
			</Container>
		</>
	);
}

interface LinkItem {
	enabled: boolean;
	icon: ReactNode;
	text: string;
	url: string;
}

interface ProjectItemProps {
	imageSrc: string;
	titleText: string;
	descriptionText: string;
	subDescriptionText: string;
	skillsArray: string[];
	linksArray: LinkItem[];
}

function ProjectItem({
	imageSrc,
	titleText,
	descriptionText,
	subDescriptionText,
	skillsArray,
	linksArray,
}: ProjectItemProps) {
	return (
		<>
			<VStack align="start" className={classes.container} gap={0}>
				<Image className={classes.image} src={imageSrc} />
				<Text className={`${classes.title} jetbrains-mono`}>{titleText}</Text>
				<Stack gap={0} className={classes["description-container"]}>
					<Text className={classes.description}>{descriptionText}</Text>
					<Text className={`${classes["sub-description"]} faded-text`}>
						{subDescriptionText}
					</Text>
				</Stack>
				<Flex gap={2} wrap="wrap" mt={5}>
					{skillsArray.map((skillStr) => (
						<div className={classes.skill}>
							<Text>{skillStr}</Text>
						</div>
					))}
				</Flex>
				<Flex gap={2} wrap="wrap" mt={5} className={classes.links}>
					{linksArray.map((linkItem) =>
						linkItem.enabled ? (
							<Link
								href={linkItem.url}
								target="_blank"
								className="colored-text"
							>
								<HStack>
									<Icon>{linkItem.icon}</Icon>
									<Text>{linkItem.text}</Text>
								</HStack>
							</Link>
						) : (
							<HStack className={classes["link-disabled"]}>
								<Icon>{linkItem.icon}</Icon>
								<Text>{linkItem.text}</Text>
							</HStack>
						)
					)}
				</Flex>
			</VStack>
		</>
	);
}
