import { useState, useEffect } from "react";
import { ColorSchemeSource, type ColorScheme } from "./ColorSchemeSource";

const THEME_DATA_ATTRIBUTE = "theme";

export function syncThemeToDOM() {
	ColorSchemeSource.removeListener(updateSchemeToDOMListener);
	ColorSchemeSource.addListener(updateSchemeToDOMListener);
	updateDOMColorScheme(ColorSchemeSource.getColorScheme());
}

export function unsyncThemeFromDOM() {
	ColorSchemeSource.removeListener(updateSchemeToDOMListener);
}

export default function useDarkMode(): [
	boolean,
	React.Dispatch<React.SetStateAction<boolean>>,
] {
	const [inDarkMode, setInDarkMode] = useState<boolean>(() => {
		const colorScheme: ColorScheme = ColorSchemeSource.getColorScheme();
		return colorScheme === "dark";
	});

	useEffect(() => {
		function syncColorScheme(_: ColorScheme, newScheme: ColorScheme) {
			setInDarkMode(newScheme === "dark");
		}
		ColorSchemeSource.addListener(syncColorScheme);
		return () => {
			ColorSchemeSource.removeListener(syncColorScheme);
		};
	}, []);

	useEffect(() => {
		ColorSchemeSource.setColorScheme(inDarkMode ? "dark" : "light");
	}, [inDarkMode]);

	return [inDarkMode, setInDarkMode];
}

const updateSchemeToDOMListener = (_: ColorScheme, newScheme: ColorScheme) => {
	updateDOMColorScheme(newScheme);
};

function updateDOMColorScheme(newScheme: ColorScheme) {
	document.documentElement.dataset[THEME_DATA_ATTRIBUTE] = newScheme;
}
