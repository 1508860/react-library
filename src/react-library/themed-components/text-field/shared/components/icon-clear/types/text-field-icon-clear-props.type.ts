import type { TextFieldPropsIsDisabled } from "../../../types/text-field-props-is-disabled.type";
import type { TextFieldPropsOnClear } from "../../../types/text-field-props-on-clear.type";
import type { TextFieldPropsStyle } from "../../../types/text-field-props-style.type";

/**
 * Props for text field icon clear component
 */
export type TextFieldIconClearProps = (
	TextFieldPropsIsDisabled &
	TextFieldPropsOnClear &
	TextFieldPropsStyle
);
