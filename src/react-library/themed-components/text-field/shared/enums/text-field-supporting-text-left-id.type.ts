/**
 * Text field supporting text left id
 */
export const TextFieldSupportingTextLeftId = {
	HasLowercase: "HasLowercase",
	HasNoWhitespace: "HasNoWhitespace",
	HasNumeric: "HasNumeric",
	HasSpecialCharacter: "HasSpecialCharacter",
	HasUppercase: "HasUppercase",
	IsRequired: "IsRequired",
	SupportingText: "SupportingText"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TextFieldSupportingTextLeftId}
 */
export type TextFieldSupportingTextLeftId = (typeof TextFieldSupportingTextLeftId)[keyof typeof TextFieldSupportingTextLeftId];
