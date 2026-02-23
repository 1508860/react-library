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
			detach={!!props.detach}
			footer={props.footer}
			includeBodyPaddingBottom={!!props.includeBodyPaddingBottom}
			includeBodyPaddingHorizontal={!!props.includeBodyPaddingHorizontal}
			key="modal"
			onBack={props.onBack}
			onClose={props.onClose}
			position={props.position}
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
			includeBodyPaddingBottom={!!props.includeBodyPaddingBottom}
			includeBodyPaddingHorizontal={!!props.includeBodyPaddingHorizontal}
			includeDivider={!!props.includeDivider}
			key="modal"
			onBack={props.onBack}
			onClose={props.onClose}
			position={props.position}
			show={props.show}
			showFooterDivider={!!props.showFooterDivider}
			title={props.title}
			width={props.width}
		>
			{props.children}
		</SideSheetStandard>
	);
}
