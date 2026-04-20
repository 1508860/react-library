import type { IIsDefault, IIsPopulated } from "@react-library/common";

/**
 * Text field component is populated state
 */
export type TextFieldIsPopulatedState = (
	IIsDefault<boolean> &
	IIsPopulated<boolean>
);
