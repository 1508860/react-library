import type { CSSProperties } from "react";

import type { Colour } from "@react-library/common";

/**
 * Resolve button disabled layer style based on parameters
 * @param colour
 */
export function buttonDisabledLayerStyle(colour: Colour): CSSProperties {
	return {
		backgroundColor: colour.toColourString(),
		cursor: "pointer",
		inset: 0,
		position: "absolute"
	};
}
