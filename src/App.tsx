import "./App.css";
import { VStack } from "@chakra-ui/react";

import "./components/Content.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
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
