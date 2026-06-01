import type { CSSProperties } from "react";

import type { DatePickerColourState } from "../../../types/date-picker-colour-state.type";

/**
 * Resolve date picker selection menu months resolver style
 * @param colourState
 */
export function datePickerSelectionMenuMonthResolverStyle(colourState: DatePickerColourState): CSSProperties {
	return {
		backgroundColor: colourState.selectionMenu.background.toColourString(),
		inset: 0,
		position: "absolute"
	};
}
