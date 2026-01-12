import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./components/pages/HomePage.tsx";
import { ProjectPage } from "./components/pages/ProjectsPage.tsx";
import { ArtPage } from "./components/pages/ArtPage.tsx";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Provider>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage />} />
					<Route path="projects" element={<ProjectPage />} />
					<Route path="art" element={<ArtPage />} />
				</Route>
			</Routes>
		</Provider>
	</BrowserRouter>
);
