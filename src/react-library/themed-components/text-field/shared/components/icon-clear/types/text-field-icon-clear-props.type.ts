import type { Callback, IOnClear, IStyle } from "@react-library/common";

import type { TextFieldStyle } from "../../../enums/text-field-style.type";

/**
 * Props for text field icon clear component
 */
export type TextFieldIconClearProps = (
	IOnClear<Callback<void>> &
	IStyle<TextFieldStyle>
);
