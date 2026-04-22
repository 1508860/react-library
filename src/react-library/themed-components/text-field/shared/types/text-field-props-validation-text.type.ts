import type { IMaxCharacterCount, IMaxWordCount, IValidation } from "@react-library/common";

/**
 *  Props for text field component for validating a text input value
 */
export type TextFieldPropsValidationText = (
	Partial<IValidation<TextFieldValidationTextConfig>>
);

/**
 *  Config for text field component for validating a text input value
 */
export type TextFieldValidationTextConfig = (
	Partial<IMaxCharacterCount<number>> &
	Partial<IMaxWordCount<number>>
);
