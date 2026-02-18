import type { CSSProperties } from "react";

import { Orientation, type ColourScheme } from "@react-library/common";

/**
 * Resolve divider style based on parameters
 * @param orientation
 * @param colourScheme
 */
export function sideSheetPanelStyle(orientation: Orientation, colourScheme: ColourScheme): CSSProperties {
	return {
		backgroundColor: colourScheme.outline.outlineVariant.toColourString(),
		display: "block",
		height: orientation === Orientation.Horizontal ? 1 : "100%",
		width: orientation === Orientation.Horizontal ? "100%" : 1
	};
}
