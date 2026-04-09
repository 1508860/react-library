/**
 * Modal basic action dismiss text
 */
export const ModalBasicActionDismissText = {
	Cancel: "cancel",
	Close: "close",
	Dismiss: "dismiss",
	OK: "ok",
	Okay: "okay",
} as const satisfies Record<string, string>;

/**
 * Type for {@link ModalBasicActionDismissText}
 */
export type ModalBasicActionDismissText = (typeof ModalBasicActionDismissText)[keyof typeof ModalBasicActionDismissText];

/**
 * Map for {@link ModalBasicActionDismissText} to readable text
 */
export const ModalBasicActionDismissTextMap = {
	[ModalBasicActionDismissText.Cancel]: "Cancel",
	[ModalBasicActionDismissText.Close]: "Close",
	[ModalBasicActionDismissText.Dismiss]: "Dismiss",
	[ModalBasicActionDismissText.OK]: "OK",
	[ModalBasicActionDismissText.Okay]: "Okay"
} as const satisfies Record<ModalBasicActionDismissText, string>;
