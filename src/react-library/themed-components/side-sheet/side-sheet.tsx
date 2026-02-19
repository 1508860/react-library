import { SideSheetModal } from "./components/side-sheet-modal";
import { SideSheetStandard } from "./components/side-sheet-standard";
import { SideSheetStyle } from "./enums/side-sheet-style.type";
import type { SideSheetProps } from "./types/side-sheet-props.type";

/**
 * Side sheet component
 */
export function SideSheet(props: SideSheetProps) {
	if (props.style === SideSheetStyle.Modal) return (
		<SideSheetModal
			key="modal"
			onBack={props.onBack}
			onClose={props.onClose}
			panelChild={props.panelChild}
			show={props.show}
			title={props.title}
			width={props.width}
		>
			{props.children}
		</SideSheetModal>
	);

	return (
		<SideSheetStandard
			key="modal"
			onBack={props.onBack}
			onClose={props.onClose}
			panelChild={props.panelChild}
			show={props.show}
			title={props.title}
			width={props.width}
			includeDivider
		>
			{props.children}
		</SideSheetStandard>
	);
}
