import type { CSSProperties } from "react";

import type { IColourScheme } from "@react-library/common";

/**
 * Resolve navigation rail backdrop style based on parameters
 * @param colourScheme
 */
export function navigationRailBackdropStyle(colourScheme: IColourScheme): CSSProperties {
	return {
		backgroundColor: colourScheme.backdrop.colour.toColourString(),
		cursor: "pointer",
		inset: 0,
		opacity: colourScheme.backdrop.opacity,
		position: "absolute"
	};
}
