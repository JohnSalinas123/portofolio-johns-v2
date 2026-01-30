import { Heading, SimpleGrid, Stack, Tabs, useTabs } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { CameraRig } from "../CameraRig";
import { StarsBackground } from "../StarsBackground";

import classes from "./ProjectsPage.module.css";

import { ProjectItem } from "../content/ProjectItem";

import rawData from "../../data/allprojects.json";
import type { ProjectsData } from "../../types/projects";

import linguachatImage from "../../assets/projects/linguachat_image.png";
import weeklyImage from "../../assets/projects/weekly_image.png";
import cppeventmapImage from "../../assets/projects/cppeventmap_image.png";
import mybookshelfImage from "../../assets/projects/mybookshelf_image.png";
import appTrackImage from "../../assets/projects/apptrack_image.png";
import portofolioV2Image from "../../assets/projects/portofoliov2_image.png";

const allProjectsData = rawData as ProjectsData;

type ProjectKey = keyof typeof allProjectsData.projects;

const imageMap: Record<string, string> = {
	linguachat: linguachatImage,
	weekly: weeklyImage,
	cppeventmap: cppeventmapImage,
	mybookshelf: mybookshelfImage,
	apptrack: appTrackImage,
	portfoliov2: portofolioV2Image,
};

export function ProjectsPage() {
	const navRef = useRef<HTMLDivElement | null>(null);
	const [, setNavHeight] = useState<number>(0);

	const tabs = useTabs({
		defaultValue: "all",
	});

	useEffect(() => {
		if (navRef.current) {
			setNavHeight(navRef.current.offsetHeight);
		}
	}, []);

	return (
		<>
			<Stack gap={0} justify="start" align="center" className="main-content">
				<div className={classes.content}>
					<div className="stars-background-box">
						<Canvas eventSource={document.body} eventPrefix="client">
							<CameraRig objectDistance={4} />
							<StarsBackground count={1000} boxSize={10} objectDistance={3} />
						</Canvas>
					</div>
					<Heading as="h1" size="5xl" style={{ textDecoration: "underline" }}>
						All Projects
					</Heading>
				</div>
				<div className={classes.innerContainer}>
					<Tabs.RootProvider value={tabs} variant="outline">
						<Tabs.List className={classes.triggerList} style={{ gap: "20px" }}>
							<Tabs.Trigger
								value="all"
								style={{ color: tabs.value === "all" ? "black" : undefined }}
								className={classes.tabTrigger}
							>
								All
							</Tabs.Trigger>
							<Tabs.Trigger
								value="web"
								style={{ color: tabs.value === "web" ? "black" : undefined }}
								className={classes.tabTrigger}
							>
								Web
							</Tabs.Trigger>
							<Tabs.Trigger
								value="mobile"
								style={{ color: tabs.value === "mobile" ? "black" : undefined }}
								className={classes.tabTrigger}
							>
								Mobile
							</Tabs.Trigger>
							<Tabs.Trigger
								value="hobbies"
								style={{
									color: tabs.value === "hobbies" ? "black" : undefined,
								}}
								className={classes.tabTrigger}
							>
								Hobbies
							</Tabs.Trigger>
						</Tabs.List>
						<Tabs.Content value="all" className={classes.tabsContent}>
							<SimpleGrid
								justifyItems="center"
								columns={{ base: 1, md: 2, lg: 3 }}
								gap="32px"
							>
								{allProjectsData.all.map((key: ProjectKey) => {
									const project = allProjectsData.projects[key];

									return (
										<ProjectItem
											key={key}
											imageSrc={imageMap[project.imageKey]}
											titleText={project.title}
											descriptionText={project.description}
											skillsArray={project.skills.map((s) => s.name)}
											linksArray={project.links}
											border={project.border}
										/>
									);
								})}
							</SimpleGrid>
						</Tabs.Content>
						<Tabs.Content value="web" className={classes.tabsContent}>
							<SimpleGrid
								justifyItems="center"
								columns={{ base: 1, md: 2, lg: 3 }}
								gap="32px"
							>
								{allProjectsData.web.map((key: ProjectKey) => {
									const project = allProjectsData.projects[key];

									return (
										<ProjectItem
											key={key}
											imageSrc={imageMap[project.imageKey]}
											titleText={project.title}
											descriptionText={project.description}
											skillsArray={project.skills.map((s) => s.name)}
											linksArray={project.links}
											border={project.border}
										/>
									);
								})}
							</SimpleGrid>
						</Tabs.Content>
						<Tabs.Content value="mobile" className={classes.tabsContent}>
							<SimpleGrid
								justifyItems="center"
								columns={{ base: 1, md: 2, lg: 3 }}
								gap="32px"
							>
								{allProjectsData.mobile.map((key: ProjectKey) => {
									const project = allProjectsData.projects[key];

									return (
										<ProjectItem
											key={key}
											imageSrc={imageMap[project.imageKey]}
											titleText={project.title}
											descriptionText={project.description}
											skillsArray={project.skills.map((s) => s.name)}
											linksArray={project.links}
											border={project.border}
										/>
									);
								})}
							</SimpleGrid>
						</Tabs.Content>
						<Tabs.Content
							value="hobbies"
							className={classes.tabsContent}
						></Tabs.Content>
					</Tabs.RootProvider>
				</div>
			</Stack>
		</>
	);
}
