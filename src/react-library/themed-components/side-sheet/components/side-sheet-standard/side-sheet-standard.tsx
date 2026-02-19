import { Orientation } from "@react-library/common";

import { Divider } from "../../../divider";

import { SideSheetPanel } from "../side-sheet-panel";
import { SIDE_SHEET_STANDARD_CHILDREN_STYLE } from "./styles/side-sheet-standard-children-style.const";
import { SIDE_SHEET_STANDARD_STYLE } from "./styles/side-sheet-standard-style.const";
import type { SideSheetStandardProps } from "./types/side-sheet-standard-props.type";

/**
 * Side sheet standard component
 */
export function SideSheetStandard(props: SideSheetStandardProps) {
	return (
		<div style={SIDE_SHEET_STANDARD_STYLE}>
			<div
				key="children"
				style={SIDE_SHEET_STANDARD_CHILDREN_STYLE}
			>
				{props.children}
			</div>
			<Divider
				hide={!props.includeDivider}
				key="divider"
				orientation={Orientation.Vertical}
			/>
			<SideSheetPanel
				key="panel"
				onBack={props.onBack}
				onClose={props.onClose}
				panelChild={props.panelChild}
				show={props.show}
				title={props.title}
				width={props.width}
			/>
		</div>
	);
}
