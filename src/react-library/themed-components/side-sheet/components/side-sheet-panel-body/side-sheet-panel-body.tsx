import { Fragment } from "react"

import { sideSheetPanelBodyContentStyle } from "./styles/side-sheet-panel-body-content-style.function";
import { sideSheetPanelBodyStyle } from "./styles/side-sheet-panel-body-style.function";
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
			style={sideSheetPanelBodyStyle(props.width)}
		>
			<div style={sideSheetPanelBodyContentStyle(props.includeBodyPaddingBottom, props.includeBodyPaddingHorizontal)}>
				<props.body />
			</div>
		</div>
	);
}
