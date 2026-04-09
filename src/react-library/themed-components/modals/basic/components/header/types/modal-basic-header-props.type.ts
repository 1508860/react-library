import type { IHasChildren, IIconName, IText, ITextMaxWidth, ITitle } from "@react-library/common";

import type { ModalBasicIconName } from "../../../types/modal-basic-icon-name.type";
import type { ModalBasicTextMaxWidth } from "../../../types/modal-basic-text-max-width.type";
import type { ModalBasicText } from "../../../types/modal-basic-text.type";
import type { ModalBasicTitle } from "../../../types/modal-basic-title.type";

/**
 * Props for modal basic header component
 */
export type ModalBasicHeaderProps = (
	IHasChildren<boolean> &
	Partial<IIconName<ModalBasicIconName>> &
	IText<ModalBasicText> &
	Partial<ITextMaxWidth<ModalBasicTextMaxWidth>> &
	Partial<ITitle<ModalBasicTitle>>
);
