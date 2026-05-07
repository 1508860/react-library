import type { CSSProperties } from "react";

import { ColourSchemeElevationLevel, type ColourScheme } from "@react-library/common";

import { SIDE_SHEET_PANEL_BORDER_RADIUS_ROUND_PX } from "../../../constants/side-sheet-panel-border-radius-round-px.const";
import { SIDE_SHEET_PANEL_DETACH_MARGIN_PX } from "../../../constants/side-sheet-panel-detatch-margin-px.const";
import { SideSheetPosition } from "../../../enums/side-sheet-position.type";

/**
 * Resolve side sheet modal panel style based on parameters
 * @param detach
 * @param position
 * @param colourScheme
 */
export function sideSheetModalPanelStyle(detach: boolean, position: SideSheetPosition, colourScheme: ColourScheme): CSSProperties {
	return {
		alignItems: "stretch",
		borderBottomLeftRadius: SIDE_SHEET_PANEL_BORDER_RADIUS_ROUND_PX,
		borderBottomRightRadius: detach ? SIDE_SHEET_PANEL_BORDER_RADIUS_ROUND_PX : undefined,
		borderTopLeftRadius: SIDE_SHEET_PANEL_BORDER_RADIUS_ROUND_PX,
		borderTopRightRadius: detach ? SIDE_SHEET_PANEL_BORDER_RADIUS_ROUND_PX : undefined,
		bottom: detach ? SIDE_SHEET_PANEL_DETACH_MARGIN_PX : 0,
		boxShadow: colourScheme.elevation.boxShadow[ColourSchemeElevationLevel.Level1],
		display: "inline-flex",
		flexDirection: "row",
		flexShrink: 0,
		overflow: "hidden",
		position: "absolute",
		right: position === SideSheetPosition.End ? (detach ? SIDE_SHEET_PANEL_DETACH_MARGIN_PX : 0) : undefined,
		left: position === SideSheetPosition.End ? undefined : (detach ? SIDE_SHEET_PANEL_DETACH_MARGIN_PX : 0),
		top: detach ? SIDE_SHEET_PANEL_DETACH_MARGIN_PX : 0,
		zIndex: 1
	};
}
