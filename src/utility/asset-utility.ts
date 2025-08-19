export function getImageURL(imageFileName: string): URL {
	return new URL(`../assets/${imageFileName}`, import.meta.url);
}
