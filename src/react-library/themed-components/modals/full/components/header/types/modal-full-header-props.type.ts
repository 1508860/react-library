import type {
	IActionConfirm,
	IActionDismiss,
	ITitle
} from "@react-library/common";

import type {
	ModalFullActionConfirm,
	ModalFullActionDismiss
} from "../../../types/modal-full-action.type";
import type { ModalFullTitle } from "../../../types/modal-full-title.type";

/**
 * Props for modal full header component
 */
export type ModalFullHeaderProps = (
	Partial<IActionConfirm<ModalFullActionConfirm>> &
	IActionDismiss<ModalFullActionDismiss> &
	Partial<ITitle<ModalFullTitle>>
);
