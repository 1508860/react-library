import { Fragment } from "react"

import { sideSheetPanelBodyContentStyle } from "./styles/side-sheet-panel-body-content-style.function";
import { SIDE_SHEET_PANEL_BODY_STYLE } from "./styles/side-sheet-panel-body-style.const";
import type { SideSheetPanelBodyProps } from "./types/side-sheet-panel-body-props.type";

/**
 * Side sheet panel body component
 */
export function SideSheetPanelBody(props: SideSheetPanelBodyProps) {

	if (!props.show) return (
		<Fragment key="no-side-sheet-panel-body" />
	);

	return (
		<div
			key="side-sheet-panel-body"
			style={SIDE_SHEET_PANEL_BODY_STYLE}
		>
			<div style={sideSheetPanelBodyContentStyle(props.includeBodyPaddingBottom, props.includeBodyPaddingHorizontal)}>
				<props.body />
			</div>
		</div>
	);
}
