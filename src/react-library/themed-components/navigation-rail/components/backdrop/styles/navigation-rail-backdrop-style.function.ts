import type { CSSProperties } from "react";

import type { ColourScheme } from "@react-library/common";

/**
 * Resolve navigation rail backdrop style based on parameters
 * @param colourScheme
 */
export function navigationRailBackdropStyle(colourScheme: ColourScheme): CSSProperties {
	return {
		backgroundColor: colourScheme.backdrop.colour.toColourString(),
		cursor: "pointer",
		inset: 0,
		position: "absolute"
	};
}
