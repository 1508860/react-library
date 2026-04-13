/**
 * Modal full action confirm text
 */
export const ModalFullActionConfirmText = {
	Add: "add",
	Create: "create",
	OK: "ok",
	Okay: "okay",
	Save: "save",
	Update: "update"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ModalFullActionConfirmText}
 */
export type ModalFullActionConfirmText = (typeof ModalFullActionConfirmText)[keyof typeof ModalFullActionConfirmText];

/**
 * Map for {@link ModalFullActionConfirmText} to readable text
 */
export const ModalFullActionConfirmTextMap = {
	[ModalFullActionConfirmText.Add]: "Add",
	[ModalFullActionConfirmText.Create]: "Create",
	[ModalFullActionConfirmText.OK]: "OK",
	[ModalFullActionConfirmText.Okay]: "Okay",
	[ModalFullActionConfirmText.Save]: "Save",
	[ModalFullActionConfirmText.Update]: "Update"
} as const satisfies Record<ModalFullActionConfirmText, string>;
