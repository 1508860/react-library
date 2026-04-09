import type {
	IActionConfirm,
	IActionDismiss
} from "@react-library/common";

import type {
	ModalBasicActionConfirm,
	ModalBasicActionDismiss
} from "../../../types/modal-basic-action.type";

/**
 * Props for modal basic actions component
 */
export type ModalBasicActionsProps = (
	Partial<IActionConfirm<ModalBasicActionConfirm>> &
	IActionDismiss<ModalBasicActionDismiss>
);
