export type ColorScheme = "dark" | "light";
export type SchemeChangedListener = (
	oldValue: ColorScheme,
	newValue: ColorScheme,
) => void;

const LS_SAVED_COLOR_SCHEME_KEY = "color-scheme";

const listeners: SchemeChangedListener[] = [];
let cachedScheme: ColorScheme = initializeColorScheme();

export const ColorSchemeSource = {
	getColorScheme(): ColorScheme {
		return cachedScheme;
	},

	setColorScheme(newScheme: ColorScheme): void {
		if (cachedScheme === newScheme) {
			return;
		}
		localStorage.setItem(LS_SAVED_COLOR_SCHEME_KEY, newScheme);
		listeners.forEach((listener) => {
			listener(cachedScheme, newScheme);
		});
		cachedScheme = newScheme;
	},

	addListener(listener: SchemeChangedListener) {
		listeners.push(listener);
	},

	removeListener(listener: SchemeChangedListener) {
		const index = listeners.indexOf(listener);
		if (index > -1) {
			listeners.splice(index, 1);
		}
	},
};

function initializeColorScheme(): ColorScheme {
	const persistedScheme = localStorage.getItem(
		LS_SAVED_COLOR_SCHEME_KEY,
	) as ColorScheme | null;
	if (persistedScheme === null) {
		const systemScheme = getSystemColorScheme();
		localStorage.setItem(LS_SAVED_COLOR_SCHEME_KEY, systemScheme);
		return systemScheme;
	}
	return persistedScheme;
}

function getSystemColorScheme(): ColorScheme {
	const systemUsesDarkMode: boolean = window.matchMedia(
		"(prefers-color-scheme: dark)",
	).matches;
	return systemUsesDarkMode ? "dark" : "light";
}
