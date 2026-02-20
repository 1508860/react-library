import { useEffect, useState } from "react";

import { SIDE_SHEET_PANEL_TRANSITION_DURATION_MS } from "../constants/side-sheet-panel-transition-duration-ms.const";

/**
 * Custom hook to handle the show state during the transition period for the panel
 */
export function useSideSheetTransitionShowState(show: boolean): [boolean] {

	const [state, setState] = useState<boolean>(() => show);

	// Handle show state
	useEffect(
		() => {
			if (!show) return;
			setState(true);
		},
		[show]
	);

	// Handle don't show state
	useEffect(
		() => {
			if (show) return;
			const timeout = setTimeout(() => setState(false), SIDE_SHEET_PANEL_TRANSITION_DURATION_MS);
			return () => {
				clearTimeout(timeout);
			};
		},
		[show]
	);

	return [state];
}
