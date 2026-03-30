import { Fragment } from "react"

import { SIDE_SHEET_PANEL_FOOTER_STYLE } from "./styles/side-sheet-panel-footer-style.const";
import type { SideSheetPanelFooterProps } from "./types/side-sheet-panel-footer-props.type";

/**
 * Side sheet panel footer component
 */
export function SideSheetPanelFooter(props: SideSheetPanelFooterProps) {

	if (!props.show || !props.footer) return (
		<Fragment key="no-side-sheet-panel-footer" />
	);

	return (
		<div
			key="side-sheet-panel-footer"
			style={SIDE_SHEET_PANEL_FOOTER_STYLE}
		>
			<props.footer />
		</div>
	);
}
