import type {
	IHasLowercase,
	IHasNoWhitespace,
	IHasNumeric,
	IHasSpecialCharacter,
	IHasUppercase,
	IMaxCharacterCount,
	IMinCharacterCount
} from "@react-library/common";

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
