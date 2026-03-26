import type { CSSProperties } from "react";

import type { ColourScheme } from "@react-library/common";

/**
 * Resolve navigation rail backdrop content style based on parameters
 * @param colourScheme
 */
export function navigationRailBackdropContentStyle(colourScheme: ColourScheme): CSSProperties {
	return {
		backgroundColor: colourScheme.backdrop.colour.toColourString(),
		cursor: "pointer",
		height: "100%",
		opacity: colourScheme.backdrop.opacity,
		width: "100%"
	};
}
