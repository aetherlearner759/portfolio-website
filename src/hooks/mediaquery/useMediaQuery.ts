import { useEffect, useRef, useState } from "react";

interface HookedMediaQueryList {
	readonly matches: boolean;
	detach: () => void;
}

export function useMediaQuery(query: string): boolean {
	const mqlRef = useRef<HookedMediaQueryList | null>(null);
	const [matches, setMatches] = useState<boolean>(false);

	useEffect(() => {
		function createHookedMediaQueryList(): HookedMediaQueryList {
			const mql = window.matchMedia(query);
			mql.addEventListener("change", syncMatches);
			setMatches(mql.matches);

			function syncMatches() {
				setMatches(mql.matches);
			}
			return {
				get matches(): boolean {
					return mql.matches;
				},
				detach() {
					mql.removeEventListener("change", syncMatches);
				},
			};
		}

		mqlRef.current?.detach();
		mqlRef.current = createHookedMediaQueryList();
		return () => {
			mqlRef.current?.detach();
		};
	}, [query]);

	return matches;
}
