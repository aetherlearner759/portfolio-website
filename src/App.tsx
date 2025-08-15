import { useEffect } from "react";
import {
	syncThemeToDOM,
	unsyncThemeFromDOM,
} from "./hooks/darkmode/useDarkMode";
import PortfolioPage from "./pages/PortfolioPage";

export default function App() {
	useEffect(() => {
		syncThemeToDOM();
		return () => {
			unsyncThemeFromDOM();
		};
	}, []);

	return <PortfolioPage />;
}
