import type { IMaxCharacterCount, IMaxWordCount, IValidation } from "@react-library/common";

import type { TextFieldValidationText } from "../enums/text-field-validation-text.type";

type TextFieldValidationTextPropsBase<TTextFieldValidationText extends TextFieldValidationText> = (
	IValidation<TTextFieldValidationText>
);

/**
 *  Props for text field component for validating that a text input value has met character requirements
 */
export type TextFieldValidationTextPropsEnd = (
	IMaxCharacterCount<number> &
	TextFieldValidationTextPropsBase<typeof TextFieldValidationText.Character>
);

/**
 *  Props for text field component for no text validation
 */
export type TextFieldValidationTextPropsNone = (
	TextFieldValidationTextPropsBase<typeof TextFieldValidationText.None>
);

/**
 *  Props for text field component for validating that a text input value has met word requirements
 */
export type TextFieldValidationTextPropsStart = (
	IMaxWordCount<number> &
	TextFieldValidationTextPropsBase<typeof TextFieldValidationText.Word>
);

/**
 * Props for text field component content
 */
export type TextFieldValidationTextProps = (
	TextFieldValidationTextPropsEnd |
	TextFieldValidationTextPropsNone |
	TextFieldValidationTextPropsStart
);
