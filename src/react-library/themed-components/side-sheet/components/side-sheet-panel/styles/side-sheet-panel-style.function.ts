import type { CSSProperties } from "react";

import type { ColourScheme, Size } from "@react-library/common";

import { SIDE_SHEET_PANEL_TRANSITION_DURATION_MS } from "../../../constants/side-sheet-panel-transition-duration-ms.const";

/**
 * Resolve side sheet panel style based on parameters
 * @param show
 * @param width
 * @param colourScheme
 */
export function sideSheetPanelStyle(show: boolean, width: Size, colourScheme: ColourScheme): CSSProperties {
	return {
		alignItems: "stretch",
		backgroundColor: colourScheme.surface.default.colour.toColourString(),
		display: "flex",
		flexDirection: "column",
		flexShrink: 0,
		maxWidth: 400,
		overflow: "hidden",
		position: "relative",
		transitionDuration: `${SIDE_SHEET_PANEL_TRANSITION_DURATION_MS}ms`,
		transitionProperty: "width",
		transitionTimingFunction: "ease-in-out",
		width: show ? width : 0
	};
}
