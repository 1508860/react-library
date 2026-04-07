import type { CSSProperties } from "react";

import type { ColourScheme } from "@react-library/common";

/**
 * Resolve backdrop content style based on parameters
 * @param colourScheme
 * @param showPointer
 */
export function backdropContentStyle(colourScheme: ColourScheme, showPointer: boolean): CSSProperties {
	return {
		backgroundColor: colourScheme.backdrop.colour.toColourString(),
		cursor: showPointer ? "pointer" : undefined,
		height: "100%",
		opacity: colourScheme.backdrop.opacity,
		width: "100%"
	};
}
