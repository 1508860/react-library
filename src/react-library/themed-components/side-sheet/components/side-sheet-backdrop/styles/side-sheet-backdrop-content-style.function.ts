import type { CSSProperties } from "react";

import type { ColourScheme } from "@react-library/common";

/**
 * Resolve side sheet backdrop content style based on parameters
 * @param colourScheme
 */
export function sideSheetBackdropContentStyle(colourScheme: ColourScheme): CSSProperties {
	return {
		backgroundColor: colourScheme.backdrop.colour.toColourString(),
		cursor: "pointer",
		inset: 0,
		opacity: colourScheme.backdrop.opacity,
		position: "absolute"
	};
}
