import type { IIsRequired, ILabel, IName, IStyle } from "@react-library/common";

import type { TextFieldStyle } from "../../../enums/text-field-style.type";

/**
 * Props for text field input label component
 */
export type TextFieldInputLabelProps = (
	IIsRequired<boolean> &
	ILabel<string> &
	IName<string> &
	IStyle<TextFieldStyle>
);
