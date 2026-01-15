import { Stack } from "@chakra-ui/react";

import { AboutMe } from "../content/AboutMe";
import { FeaturedProjects } from "../content/FeaturedProjects";
import { Experience } from "../content/Experience";
import { Education } from "../content/Education";
import { useEffect, useRef, useState } from "react";

export function HomePage() {
	const navRef = useRef<HTMLDivElement | null>(null);
	const [navHeight, setNavHeight] = useState<number>(0);

	useEffect(() => {
		if (navRef.current) {
			setNavHeight(navRef.current.offsetHeight);
		}
	}, []);

	return (
		<>
			<Stack
				className="main-content"
				style={{ paddingTop: navHeight + 32 + 112 }}
				gap={45}
			>
				<AboutMe />
				<FeaturedProjects />
				<Experience />
				<Education />
			</Stack>
		</>
	);
}
