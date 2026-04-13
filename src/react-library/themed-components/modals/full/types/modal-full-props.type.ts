import type {
	IActionConfirm,
	IActionDismiss,
	IChild,
	IIsFullWidth,
	ITitle
} from "@react-library/common";


import type { ModalFullActionConfirm, ModalFullActionDismiss } from "./modal-full-action.type";
import type { ModalFullChild } from "./modal-full-child.type";
import type { ModalFullTitle } from "./modal-full-title.type";

/**
 * Props for modal full component
 */
export type ModalFullProps = (
	Partial<IActionConfirm<ModalFullActionConfirm>> &
	IActionDismiss<ModalFullActionDismiss> &
	Partial<IChild<ModalFullChild>> &
	Partial<IIsFullWidth<boolean>> &
	Partial<ITitle<ModalFullTitle>>
);
