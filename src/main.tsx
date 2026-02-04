import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./components/pages/HomePage.tsx";
import { ProjectsPage } from "./components/pages/ProjectsPage.tsx";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Provider>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage />} />
					<Route path="projects" element={<ProjectsPage />} />
				</Route>
			</Routes>
		</Provider>
	</BrowserRouter>,
);
