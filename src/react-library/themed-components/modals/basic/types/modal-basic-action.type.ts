import type { Callback, IAction, IIsDisabled, IText } from "@react-library/common";

import type { ModalBasicActionDismissText } from "../enums/modal-basic-action-dismiss-text.type";

/**
 * Modal basic component dismiss action
 */
export type ModalBasicActionDismiss = (
	IAction<ModalBasicActionDismissCallback> &
	Partial<IIsDisabled> &
	IText<ModalBasicActionDismissText>
);

/**
 * Modal basic component dismiss action callback
 */
export type ModalBasicActionDismissCallback = Callback<void>;

/**
 * Modal basic component confirm action
 */
export type ModalBasicActionConfirm = (
	IAction<ModalBasicActionConfirmCallback> &
	Partial<IIsDisabled> &
	IText<string>
);

/**
 * Modal basic component confirm action callback
 */
export type ModalBasicActionConfirmCallback = Callback<void>;
