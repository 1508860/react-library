import type { IValidation } from "@react-library/common";

import type { TextFieldValidationPasswordConfig } from "./text-field-validation-password-config.type";

/**
 *  Props for text field component for validating a password input value
 */
export type TextFieldPropsValidationPassword = (
	Partial<IValidation<TextFieldValidationPasswordConfig>>
);
