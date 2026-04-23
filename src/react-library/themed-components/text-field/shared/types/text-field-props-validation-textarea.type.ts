import type { IMaxCharacterCount, IMaxWordCount, IValidation } from "@react-library/common";

/**
 *  Props for text field component for validating a textarea input value
 */
export type TextFieldPropsValidationTextarea = (
	Partial<IValidation<TextFieldValidationTextareaConfig>>
);

/**
 *  Config for text field component for validating a textarea input value
 */
export type TextFieldValidationTextareaConfig = (
	Partial<IMaxCharacterCount<number>> &
	Partial<IMaxWordCount<number>>
);
