import { NavigationRailBackdrop } from "../side-sheet-backdrop";
import { SideSheetPanel } from "../side-sheet-panel";
import { SIDE_SHEET_MODAL_CHILDREN_STYLE } from "./styles/side-sheet-modal-children-style.const";
import { SIDE_SHEET_MODAL_PANEL_STYLE } from "./styles/side-sheet-modal-panel-style.const";
import { SIDE_SHEET_MODAL_STYLE } from "./styles/side-sheet-modal-style.const";
import type { SideSheetModalProps } from "./types/side-sheet-modal-props.type";

/**
 * Side sheet modal component
 */
export function SideSheetModal(props: SideSheetModalProps) {
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
				show={props.show}
				key="backdrop"
			/>
			<div style={SIDE_SHEET_MODAL_PANEL_STYLE}>
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
		</div>
	);
}
