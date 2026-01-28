import {
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
import portofolio_v2 from "../../assets/portofoliov2_image.png";

import { FaGithub } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";

import classes from "./FeaturesProjects.module.css";

import type { ReactNode } from "react";

export function FeaturedProjects() {
	return (
		<>
			<div className={classes["featured-projects"]}>
				<Stack className="section" align={{ base: "center", md: "normal" }}>
					<Text className="section-title"> Featured Projects</Text>
					<SimpleGrid
						justifyItems="center"
						columns={{ base: 1, md: 2, lg: 3 }}
						gap="32px"
					>
						<ProjectItem
							imageSrc={linguachatImage}
							titleText={"LinguaChat"}
							descriptionText={
								"A real-time chat translation app designed to bridge language barriers"
							}
							subDescriptionText={
								"→ I've always wanted to travel so I made this app and focused on making the chat invitation process easy to initiate and therefore allow for the app to be used on the go."
							}
							skillsArray={["React", "CSS", "PyTorch", "Go", "PostgreSQL"]}
							linksArray={[
								{
									enabled: true,
									icon: <FaGithub />,
									text: "GitHub",
									url: "https://github.com/JohnSalinas123/linguachat-frontend",
								},
							]}
							border={true}
						/>
						<ProjectItem
							imageSrc={weeklyImage}
							titleText={"Weekly"}
							descriptionText={
								"A mobile application to help bring friends together for events and activities"
							}
							subDescriptionText={
								"→ I worked as part of the iOS development team and took ownership of several components including status updates, event invitations, chat features, and availability management."
							}
							skillsArray={["Swift", "SwiftUI", "Django", "Xcode", "Figma"]}
							linksArray={[
								{
									enabled: false,
									icon: <IoLogoAppleAppstore />,
									text: "App Store",
									url: "https://apps.apple.com/us/app/weekly-calendar-for-friends/id1596555762",
								},
							]}
							border={false}
						/>
						<ProjectItem
							imageSrc={portofolio_v2}
							titleText={"Portofolio v2"}
							descriptionText={
								"This portofolio I made to display my projects and experience"
							}
							subDescriptionText={
								"→ I really enjoy 3D modeling and a low poly look so I've added some elements such as the earth model and the background of stars that uses custom shaders."
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
							border={true}
						/>
						<ProjectItem
							imageSrc={cppeventmapImage}
							titleText={"CPPEventMap"}
							descriptionText={
								"A web application for students of Cal Poly Pomona to easily find where events are occurring on or near campus."
							}
							subDescriptionText={
								"→ I was the team lead of 5 peers, and led development effectively by bringing my team together to plan out the core features of the application, delegating tasks, and creating mockups using Figma."
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
							border={false}
						/>
						<ProjectItem
							imageSrc={appTrackImage}
							titleText={"AppTrack"}
							descriptionText={
								"A web application to help keep track and visualize job applications."
							}
							subDescriptionText={
								"→ I made this app because I needed a focused app just for applications to help in my job hunt."
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
							border={false}
						/>
						<ProjectItem
							imageSrc={mybookshelfImage}
							titleText={"MyBookShelf"}
							descriptionText={
								"A desktop electron app to help organize pdf e-books and help with the e-reading experience."
							}
							subDescriptionText={
								"→ I enjoy reading learning material and I wanted a better library-like experience so I made this desktop app."
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
							border={false}
						/>
					</SimpleGrid>
				</Stack>
			</div>
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
	border: boolean;
}

function ProjectItem({
	imageSrc,
	titleText,
	descriptionText,
	skillsArray,
	linksArray,
	border,
}: ProjectItemProps) {
	return (
		<>
			<VStack align="start" className={classes.container} gap={0}>
				<Image
					className={classes.image}
					src={imageSrc}
					style={{
						border: border ? "1px solid rgba(0,0,0,0.2)" : "none",
					}}
				/>
				<Text className={classes.title}>{titleText}</Text>
				<Stack gap={0} className={classes["description-container"]}>
					<Text className={classes.description}>{descriptionText}</Text>
					{/* <Text className={`${classes["sub-description"]} faded-text`}>
						{subDescriptionText}
					</Text> */}
				</Stack>
				<Flex gap={2} wrap="wrap" mt={5}>
					{skillsArray.map((skillStr) => (
						<div key={skillStr} className="skill">
							<Text>{skillStr}</Text>
						</div>
					))}
				</Flex>
				<Flex gap={2} wrap="wrap" mt={5} className={classes.links}>
					{linksArray.map((linkItem) =>
						linkItem.enabled ? (
							<Link
								key={linkItem.url}
								href={linkItem.url}
								target="_blank"
								className={`${classes.link} colored-text`}
							>
								<HStack>
									<Icon>{linkItem.icon}</Icon>
									<Text className={classes["link-text"]}>{linkItem.text}</Text>
								</HStack>
							</Link>
						) : (
							<HStack key={linkItem.url} className={classes["link-disabled"]}>
								<Icon>{linkItem.icon}</Icon>
								<Text>{linkItem.text}</Text>
							</HStack>
						),
					)}
				</Flex>
			</VStack>
		</>
	);
}
