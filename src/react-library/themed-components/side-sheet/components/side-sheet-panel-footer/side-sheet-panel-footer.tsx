import { Fragment } from "react"

import { sideSheetPanelFooterStyle } from "./styles/side-sheet-panel-footer-style.function";
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
			style={sideSheetPanelFooterStyle(props.width)}
		>
			<props.footer />
		</div>
	);
}
