import type { IMaxCharacterCount, IMaxWordCount, IValidation } from "@react-library/common";

import type { TextFieldValidationText } from "../enums/text-field-validation-text.type";

type TextFieldPropsValidationTextBase<TTextFieldValidationText extends TextFieldValidationText> = (
	IValidation<TTextFieldValidationText>
);

/**
 *  Props for text field component for validating that a text input value has met character requirements
 */
export type TextFieldPropsValidationTextEnd = (
	IMaxCharacterCount<number> &
	TextFieldPropsValidationTextBase<typeof TextFieldValidationText.Character>
);

/**
 *  Props for text field component for no text validation
 */
export type TextFieldPropsValidationTextNone = (
	TextFieldPropsValidationTextBase<typeof TextFieldValidationText.None>
);

/**
 *  Props for text field component for validating that a text input value has met word requirements
 */
export type TextFieldPropsValidationTextStart = (
	IMaxWordCount<number> &
	TextFieldPropsValidationTextBase<typeof TextFieldValidationText.Word>
);

/**
 * Props for text field component content
 */
export type TextFieldPropsValidationText = (
	TextFieldPropsValidationTextEnd |
	TextFieldPropsValidationTextNone |
	TextFieldPropsValidationTextStart
);
