import { Stack } from "@chakra-ui/react";

import { AboutMe } from "../content/AboutMe";
import { FeaturedProjects } from "../content/FeaturedProjects";
import { Experience } from "../content/Experience";
import { Education } from "../content/Education";

export function HomePage() {
	return (
		<>
			<Stack className="main-content" gap={45}>
				<AboutMe />
				<FeaturedProjects />
				<Experience />
				<Education />
			</Stack>
		</>
	);
}
