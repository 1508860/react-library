import type { CSSProperties } from "react";

import type { ColourScheme, Size } from "@react-library/common";

import { SIDE_SHEET_PANEL_MAX_WIDTH_PX } from "../constants/side-sheet-panel-max-width.const";

/**
 * Resolve side sheet panel style based on parameters
 * @param width
 * @param colourScheme
 */
export function sideSheetPanelStyle(width: Size, colourScheme: ColourScheme): CSSProperties {
	return {
		alignItems: "stretch",
		backgroundColor: colourScheme.surface.default.colour.toColourString(),
		display: "flex",
		flexDirection: "column",
		flexShrink: 0,
		height: "100%",
		maxWidth: SIDE_SHEET_PANEL_MAX_WIDTH_PX,
		overflow: "hidden",
		position: "relative",
		width: width
	};
}
