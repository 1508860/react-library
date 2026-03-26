import type { CSSProperties } from "react";

import type { ColourScheme } from "@react-library/common";

/**
 * Resolve side sheet panel style based on parameters
 * @param colourScheme
 */
export function sideSheetPanelStyle(colourScheme: ColourScheme): CSSProperties {
	return {
		alignItems: "stretch",
		backgroundColor: colourScheme.surface.default.colour.toColourString(),
		display: "flex",
		flexDirection: "column",
		flexShrink: 0,
		height: "100%",
		overflow: "hidden",
		position: "relative",
		width: "100%"
	};
}
