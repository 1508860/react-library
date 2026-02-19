import type { CSSProperties } from "react";

import type { ColourScheme, Size } from "@react-library/common";

/**
 * Resolve side sheet panel style based on parameters
 * @param show
 * @param width
 * @param colourScheme
 */
export function sideSheetPanelStyle(show: boolean, width: Size | undefined, colourScheme: ColourScheme): CSSProperties {
	return {
		alignItems: "stretch",
		backgroundColor: colourScheme.surface.default.colour.toColourString(),
		display: "flex",
		flexDirection: "column",
		flexShrink: 0,
		maxWidth: 400,
		position: "relative",
		transitionDuration: "1000ms",
		transitionProperty: "width",
		width: show ? (width ?? "auto") : 0
	};
}
