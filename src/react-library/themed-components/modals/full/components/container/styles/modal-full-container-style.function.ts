import type { CSSProperties } from "react";

import { type ColourScheme } from "@react-library/common";

/**
 * Resolve modal full container style based on parameters
 * @param colourScheme
 */
export function modalFullContainerStyle(colourScheme: ColourScheme): CSSProperties {
	return {
		backgroundColor: colourScheme.surface.default.colour.toColourString(),
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		height: "100%",
		overflow: "hidden",
		position: "relative",
		width: "100%"
	};
}
