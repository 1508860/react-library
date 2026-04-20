import type { IIsErrored, IText } from "@react-library/common";

/**
 * Describes text field supporting text config
 */
export type TextFieldSupportingTextConfig = (
	IIsErrored<boolean> &
	IText<string>
);
