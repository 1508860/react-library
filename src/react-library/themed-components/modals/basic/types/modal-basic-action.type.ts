import type { Callback, IAction, IText } from "@react-library/common";

import type { ModalBasicActionDismissText } from "../enums/modal-basic-action-dismiss-text.type";

/**
 * Modal basic component dismiss action
 */
export type ModalBasicActionDismiss = (
	IAction<Callback<void>> &
	IText<ModalBasicActionDismissText>
);

/**
 * Modal basic component confirm action
 */
export type ModalBasicActionConfirm = (
	IAction<Callback<void>> &
	IText<string>
);
