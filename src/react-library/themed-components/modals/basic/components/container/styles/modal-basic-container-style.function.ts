import type { CSSProperties } from "react";

import { ColourSchemeElevationLevel, type ColourScheme } from "@react-library/common";

/**
 * Resolve modal basic container style based on parameters
 * @param colourScheme
 */
export function modalBasicContainerStyle(colourScheme: ColourScheme): CSSProperties {
	return {
		backgroundColor: colourScheme.surface.container.high.toColourString(),
		borderRadius: 28,
		boxShadow: colourScheme.elevation.boxShadow[ColourSchemeElevationLevel.Level3],
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		height: "100%",
		overflow: "hidden",
		position: "relative",
		width: "100%"
	};
}
