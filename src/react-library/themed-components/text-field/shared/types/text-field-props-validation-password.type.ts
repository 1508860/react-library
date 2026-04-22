import type {
	IHasLowercase,
	IHasNoWhitespace,
	IHasNumeric,
	IHasSpecialCharacter,
	IHasUppercase,
	IMaxCharacterCount,
	IMinCharacterCount,
	IValidation
} from "@react-library/common";

/**
 *  Props for text field component for validating a password input value
 */
export type TextFieldPropsValidationPassword = (
	Partial<IValidation<TextFieldValidationPasswordConfig>>
);

/**
 *  Config for text field component for validating a password input value
 */
export type TextFieldValidationPasswordConfig = (
	Partial<IHasLowercase<boolean>> &
	Partial<IHasNoWhitespace<boolean>> &
	Partial<IHasNumeric<boolean>> &
	Partial<IHasSpecialCharacter<boolean>> &
	Partial<IHasUppercase<boolean>> &
	Partial<IMaxCharacterCount<number>> &
	Partial<IMinCharacterCount<number>>
);
