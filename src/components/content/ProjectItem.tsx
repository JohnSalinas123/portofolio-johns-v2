import {
	Stack,
	Text,
	VStack,
	Image,
	Flex,
	Icon,
	HStack,
	Link,
} from "@chakra-ui/react";

import classes from "./FeaturesProjects.module.css";
import { FaGithub } from "react-icons/fa";
import type { ReactNode } from "react";
import { IoLogoAppleAppstore } from "react-icons/io5";

const iconMap: Record<string, ReactNode> = {
	github: <FaGithub />,
	appstore: <IoLogoAppleAppstore />,
};

interface LinkItem {
	enabled: boolean;
	icon: string;
	name: string;
	url: string;
}

interface ProjectItemProps {
	imageSrc: string;
	titleText: string;
	descriptionText: string;
	skillsArray: string[];
	linksArray: LinkItem[];
	border: boolean;
}

export function ProjectItem({
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
									<Icon>{iconMap[linkItem.icon]}</Icon>
									<Text className={classes["link-text"]}>{linkItem.name}</Text>
								</HStack>
							</Link>
						) : (
							<HStack key={linkItem.url} className={classes["link-disabled"]}>
								<Icon>{iconMap[linkItem.icon]}</Icon>
								<Text>{linkItem.name}</Text>
							</HStack>
						),
					)}
				</Flex>
			</VStack>
		</>
	);
}
