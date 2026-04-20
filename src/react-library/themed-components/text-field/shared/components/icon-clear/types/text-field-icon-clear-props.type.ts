import type { Callback, IIsDisabled, IOnClear, IStyle } from "@react-library/common";

import type { TextFieldStyle } from "../../../enums/text-field-style.type";

/**
 * Props for text field icon clear component
 */
export type TextFieldIconClearProps = (
	IIsDisabled &
	IOnClear<Callback<void>> &
	IStyle<TextFieldStyle>
);
