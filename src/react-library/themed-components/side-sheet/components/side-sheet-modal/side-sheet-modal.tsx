import {
	useColourSchemeContext,
	useDelayBooleanState,
	UseDelayBooleanStateDirection
} from "@react-library/common";

import { SIDE_SHEET_PANEL_TRANSITION_DURATION_MS } from "../../constants/side-sheet-panel-transition-duration-ms.const";
import { NavigationRailBackdrop } from "../side-sheet-backdrop";
import { SideSheetPanel } from "../side-sheet-panel";
import { SIDE_SHEET_MODAL_CHILDREN_STYLE } from "./styles/side-sheet-modal-children-style.const";
import { sideSheetModalPanelStyle } from "./styles/side-sheet-modal-panel-style.function";
import { SIDE_SHEET_MODAL_STYLE } from "./styles/side-sheet-modal-style.const";
import type { SideSheetModalProps } from "./types/side-sheet-modal-props.type";

/**
 * Side sheet modal component
 */
export function SideSheetModal(props: SideSheetModalProps) {

	const colourScheme = useColourSchemeContext();

	// Handle show states for content
	const [showContent] = useDelayBooleanState(props.show, UseDelayBooleanStateDirection.ToFalse, SIDE_SHEET_PANEL_TRANSITION_DURATION_MS);

	return (
		<div style={SIDE_SHEET_MODAL_STYLE}>
			<div
				key="children"
				style={SIDE_SHEET_MODAL_CHILDREN_STYLE}
			>
				{props.children}
			</div>
			<NavigationRailBackdrop
				onClose={props.onClose}
				show={showContent}
				key="backdrop"
			/>
			<div style={sideSheetModalPanelStyle(props.detach, props.position, colourScheme)}>
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
		</div>
	);
}
