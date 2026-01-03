import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { StarsBackground } from "./components/StarsBackground";
import { PerspectiveCamera } from "@react-three/drei";
import { CameraRig } from "./components/CameraRig";
import { Stack } from "@chakra-ui/react";

import "./components/content/Content.css";

import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/content/AboutMe";
import { FeaturedProjects } from "./components/content/FeaturedProjects";
import { Experience } from "./components/content/Experience";
import { Education } from "./components/content/Education";
import { Footer } from "./components/content/Footer";

// type Parameters {
//   rotation :
// }

function App() {
	const navRef = useRef<HTMLDivElement | null>(null);
	const [navHeight, setNavHeight] = useState<number>(0);

	useEffect(() => {
		if (navRef.current) {
			setNavHeight(navRef.current.offsetHeight);
		}
	}, []);

	return (
		<>
			<div id="canvas-container">
				<Canvas>
					<PerspectiveCamera
						makeDefault
						fov={35}
						position={[0, 0, 6]}
						near={0.1}
						far={100}
					/>
					<CameraRig objectDistance={4} />
					<StarsBackground count={5000} boxSize={10} objectDistance={4} />
				</Canvas>
			</div>

			<Stack
				className="main-content"
				style={{ paddingTop: navHeight + 32 + 112 }}
				gap={45}
			>
				<Navbar />
				<AboutMe />
				<FeaturedProjects />
				<Experience />
				<Education />
			</Stack>
			<Footer />
		</>
	);
}

export default App;
