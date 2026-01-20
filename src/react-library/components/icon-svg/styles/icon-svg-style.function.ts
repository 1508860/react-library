import type { CSSProperties } from "react";

import type { Colour } from "@react-library/common";

/**
 * Resolve icon SVG style based on parameters
 * @param orientation
 * @param size
 */
export function iconSvgStyle(colour: Colour): CSSProperties {
	return {
		bottom: 0,
		fill: colour.toColourString(),
		left: 0,
		position: "absolute",
		right: 0,
		top: 0
	};
}
