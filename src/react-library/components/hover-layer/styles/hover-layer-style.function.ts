import type { CSSProperties } from "react";

import type { Colour } from "@react-library/common";

/**
 * Resolve hover layer style based on parameters
 * @param colourState
 */
export function hoverLayerStyle(colour: Colour): CSSProperties {
	return {
		backgroundColor: colour.toColourString(),
		cursor: "pointer",
		inset: 0,
		position: "absolute"
	};
}
