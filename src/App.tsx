import "./App.css";
import { Canvas } from "@react-three/fiber";
import { StarsBackground } from "./components/StarsBackground";
import { CameraRig } from "./components/CameraRig";
import { VStack } from "@chakra-ui/react";

import "./components/content/Content.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/content/Footer";
import { Outlet } from "react-router";

// type Parameters {
//   rotation :
// }

function App() {
	return (
		<>
			<VStack width="100%" className="app">
				<Navbar />
				<Outlet />
				<Footer />
			</VStack>
		</>
	);
}

export default App;
