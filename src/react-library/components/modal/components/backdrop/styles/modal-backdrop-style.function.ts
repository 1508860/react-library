import type { CSSProperties } from "react";

import type { Colour, StyleOpacity } from "@react-library/common";

/**
 * Resolve modal backdrop style based on parameters
 * @param backdropColour
 * @param styleOpacity
 */
export function modalBackdropStyle(backdropColour: Colour | undefined, styleOpacity: StyleOpacity | undefined): CSSProperties {
	return {
		backgroundColor: backdropColour?.toColourString(),
		inset: 0,
		opacity: styleOpacity,
		position: "absolute"
	};
}
