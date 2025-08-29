export function deepFreeze<T>(o: T): Readonly<T> {
	if (o === undefined || o === null) {
		return o;
	}
	Object.freeze<T>(o);

	Object.getOwnPropertyNames(o).forEach((prop: string) => {
		const propValue = o[prop as keyof typeof o];
		if (
			propValue !== null &&
			(typeof propValue === "object" || typeof propValue === "function") &&
			!Object.isFrozen(propValue)
		) {
			deepFreeze(propValue);
		}
	});
	return o;
}
