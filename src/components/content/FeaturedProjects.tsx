import { Stack, Text, SimpleGrid } from "@chakra-ui/react";

import linguachatImage from "../../assets/projects/linguachat_image.png";
import weeklyImage from "../../assets/projects/weekly_image.png";
import cppeventmapImage from "../../assets/projects/cppeventmap_image.png";
import mybookshelfImage from "../../assets/projects/mybookshelf_image.png";
import appTrackImage from "../../assets/projects/appTrack_image.png";
import portofolioV2Image from "../../assets/projects/portofoliov2_image.png";

const imageMap: Record<string, string> = {
	linguachat: linguachatImage,
	weekly: weeklyImage,
	cppeventmap: cppeventmapImage,
	mybookshelf: mybookshelfImage,
	apptrack: appTrackImage,
	portfoliov2: portofolioV2Image,
};

import featuredProjectsData from "../../data/featured_projects.json";

import classes from "./FeaturesProjects.module.css";
import { ProjectItem } from "./ProjectItem";

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
						mt="40px"
					>
						{featuredProjectsData.map((project) => (
							<ProjectItem
								imageSrc={imageMap[project.imageKey]}
								titleText={project.title}
								descriptionText={project.description}
								skillsArray={project.skills.map((s) => s.name)}
								linksArray={project.links}
								border={project.border}
							/>
						))}
					</SimpleGrid>
				</Stack>
			</div>
		</>
	);
}
