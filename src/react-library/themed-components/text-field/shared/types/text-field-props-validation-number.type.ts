import type {
	IMaxValue,
	IMinValue,
	IValidation
} from "@react-library/common";

/**
 *  Props for text field component for validating a number input value
 */
export type TextFieldPropsValidationNumber = (
	Partial<IValidation<TextFieldValidationNumberConfig>>
);

/**
 *  Config for text field component for validating a number input value
 */
export type TextFieldValidationNumberConfig = (
	Partial<IMaxValue<number>> &
	Partial<IMinValue<number>>
);
