import type {
	IActionConfirm,
	IActionDismiss,
	IChild,
	IChildrenSize,
	IIconName,
	IIsFullWidth,
	IText,
	ITextMaxWidth,
	ITitle
} from "@react-library/common";


import type { ModalBasicActionConfirm, ModalBasicActionDismiss } from "./modal-basic-action.type";
import type { ModalBasicChildSize } from "./modal-basic-child-size.type";
import type { ModalBasicChild } from "./modal-basic-child.type";
import type { ModalBasicIconName } from "./modal-basic-icon-name.type";
import type { ModalBasicTextMaxWidth } from "./modal-basic-text-max-width.type";
import type { ModalBasicText } from "./modal-basic-text.type";
import type { ModalBasicTitle } from "./modal-basic-title.type";

/**
 * Props for modal basic component
 */
export type ModalBasicProps = (
	Partial<IActionConfirm<ModalBasicActionConfirm>> &
	IActionDismiss<ModalBasicActionDismiss> &
	Partial<IChild<ModalBasicChild>> &
	IChildrenSize<ModalBasicChildSize> &
	Partial<IIconName<ModalBasicIconName>> &
	Partial<IIsFullWidth<boolean>> &
	IText<ModalBasicText> &
	Partial<ITextMaxWidth<ModalBasicTextMaxWidth>> &
	Partial<ITitle<ModalBasicTitle>>
);
