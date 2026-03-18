import type { CSSProperties } from "react";

import type { Colour } from "@react-library/common";

/**
 * Resolve button hovered layer style based on parameters
 * @param colour
 */
export function buttonHoveredLayerStyle(colour: Colour): CSSProperties {
	return {
		backgroundColor: colour.toColourString(),
		cursor: "pointer",
		inset: 0,
		position: "absolute"
	};
}
