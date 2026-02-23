import { Orientation } from "@react-library/common";

import { Divider } from "../../../divider";

import { useSideSheetTransitionShowState } from "../../hooks/use-side-sheet-transition-show-state.hook";
import { SideSheetPanel } from "../side-sheet-panel";
import { SIDE_SHEET_STANDARD_CHILDREN_STYLE } from "./styles/side-sheet-standard-children-style.const";
import { SIDE_SHEET_STANDARD_STYLE } from "./styles/side-sheet-standard-style.const";
import type { SideSheetStandardProps } from "./types/side-sheet-standard-props.type";

/**
 * Side sheet standard component
 */
export function SideSheetStandard(props: SideSheetStandardProps) {

	// Handle show states for content
	const [showContent] = useSideSheetTransitionShowState(props.show);

	return (
		<div style={SIDE_SHEET_STANDARD_STYLE}>
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
