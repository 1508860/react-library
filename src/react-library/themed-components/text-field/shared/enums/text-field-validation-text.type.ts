/**
 * Text field component content types
 */
export const TextFieldValidationText = {
	Character: "character",
	None: "none",
	Word: "word"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TextFieldValidationText}
 */
export type TextFieldValidationText = (typeof TextFieldValidationText)[keyof typeof TextFieldValidationText];
