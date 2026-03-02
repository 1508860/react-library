import type { CSSProperties } from "react";

import type { ColourScheme } from "@react-library/common";

/**
 * Resolve side sheet backdrop style based on parameters
 * @param colourScheme
 */
export function sideSheetBackdropStyle(colourScheme: ColourScheme): CSSProperties {
	return {
		backgroundColor: colourScheme.backdrop.colour.toColourString(),
		cursor: "pointer",
		inset: 0,
		position: "absolute"
	};
}
