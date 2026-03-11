import type { CSSProperties } from "react";

import type { Colour } from "@react-library/common";

/**
 * Resolve button base layer style based on parameters
 * @param colour
 * @param styleOpacity
 * @param isHovered
 */
export function buttonBaseLayerStyle(colour: Colour, isHovered: boolean): CSSProperties {
	return {
		backgroundColor: colour.toColourString(),
		cursor: isHovered ? "pointer" : undefined,
		inset: 0,
		position: "absolute"
	};
}
