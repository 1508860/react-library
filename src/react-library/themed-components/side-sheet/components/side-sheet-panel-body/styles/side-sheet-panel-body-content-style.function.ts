import type { CSSProperties } from "react";

import { SIDE_SHEET_PANEL_PADDING_PX } from "../../../constants/side-sheet-panel-padding-px.const";

/**
 * Resolve side sheet panel body content style based on parameters
 */
export function sideSheetPanelBodyContentStyle(includeBodyPaddingBottom: boolean, includeBodyPaddingHorizontal: boolean): CSSProperties {
	return {
		boxSizing: "border-box",
		paddingBottom: includeBodyPaddingBottom ? SIDE_SHEET_PANEL_PADDING_PX : undefined,
		paddingLeft: includeBodyPaddingHorizontal ? SIDE_SHEET_PANEL_PADDING_PX : undefined,
		paddingRight: includeBodyPaddingHorizontal ? SIDE_SHEET_PANEL_PADDING_PX : undefined,
		width: "100%"
	};
}
