import {
	Orientation,
	useDelayBooleanState,
	UseDelayBooleanStateDirection
} from "@react-library/common";

import { Divider } from "../../../divider";

import { SIDE_SHEET_PANEL_TRANSITION_DURATION_MS } from "../../constants/side-sheet-panel-transition-duration-ms.const";
import { SideSheetPanel } from "../side-sheet-panel";
import { SIDE_SHEET_STANDARD_CHILDREN_STYLE } from "./styles/side-sheet-standard-children-style.const";
import { sideSheetStandardStyle } from "./styles/side-sheet-standard-style.function";
import type { SideSheetStandardProps } from "./types/side-sheet-standard-props.type";

/**
 * Side sheet standard component
 */
export function SideSheetStandard(props: SideSheetStandardProps) {

	// Handle show states for content
	const [showContent] = useDelayBooleanState(props.show, UseDelayBooleanStateDirection.ToFalse, SIDE_SHEET_PANEL_TRANSITION_DURATION_MS);

	return (
		<div style={sideSheetStandardStyle(props.position)}>
			<div
				key="children"
				style={SIDE_SHEET_STANDARD_CHILDREN_STYLE}
			>
				{props.children}
			</div>
			<Divider
				hide={!showContent || !props.includeDivider}
				key="divider"
				orientation={Orientation.Vertical}
			/>
			<SideSheetPanel
				body={props.body}
				footer={props.footer}
				includeBodyPaddingBottom={props.includeBodyPaddingBottom}
				includeBodyPaddingHorizontal={props.includeBodyPaddingHorizontal}
				key="panel"
				onBack={props.onBack}
				onClose={props.onClose}
				show={props.show}
				showContent={showContent}
				showFooterDivider={props.showFooterDivider}
				title={props.title}
				width={props.width}
			/>
		</div>
	);
}
