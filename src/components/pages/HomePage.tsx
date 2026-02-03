import { Stack } from "@chakra-ui/react";

import { IntroSection } from "../IntroSection";
import { FeaturedProjectsSection } from "../FeaturedProjectsSection";
import { ExperienceSection } from "../ExperienceSection";
import { EducationSection } from "../EducationSection";

export function HomePage() {
	return (
		<>
			<Stack className="main-content" color="rgb(50,50,50)" gap={0}>
				<IntroSection />
				<FeaturedProjectsSection />
				<ExperienceSection />
				<EducationSection />
			</Stack>
		</>
	);
}
