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
			body={props.body}
			footer={props.footer}
			detach={!!props.detach}
			key="modal"
			onBack={props.onBack}
			onClose={props.onClose}
			show={props.show}
			showFooterDivider={!!props.showFooterDivider}
			title={props.title}
			width={props.width}
		>
			{props.children}
		</SideSheetModal>
	);

	return (
		<SideSheetStandard
			body={props.body}
			footer={props.footer}
			key="modal"
			onBack={props.onBack}
			onClose={props.onClose}
			show={props.show}
			showFooterDivider={!!props.showFooterDivider}
			title={props.title}
			width={props.width}
			includeDivider={props.includeDivider}
		>
			{props.children}
		</SideSheetStandard>
	);
}
