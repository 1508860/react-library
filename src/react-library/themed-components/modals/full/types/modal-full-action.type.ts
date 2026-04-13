import type { Callback, IAction, IIsDisabled, IText } from "@react-library/common";

import type { ModalFullActionConfirmText } from "../enums/modal-full-action-confirm-text.type";

/**
 * Modal full component dismiss action
 */
export type ModalFullActionDismiss = (
	IAction<ModalFullActionDismissCallback> &
	Partial<IIsDisabled>
);

/**
 * Modal full component dismiss action callback
 */
export type ModalFullActionDismissCallback = Callback<void>;

/**
 * Modal full component confirm action
 */
export type ModalFullActionConfirm = (
	IAction<ModalFullActionConfirmCallback> &
	Partial<IIsDisabled> &
	IText<ModalFullActionConfirmText>
);

/**
 * Modal full component confirm action callback
 */
export type ModalFullActionConfirmCallback = Callback<void>;
