/**
 * Text field supporting text right id
 */
export const TextFieldSupportingTextRightId = {
	MaxCharacterCount: "MaxCharacterCount",
	MaxWordCount: "MaxWordCount",
	MinCharacterCount: "MinCharacterCount"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TextFieldSupportingTextRightId}
 */
export type TextFieldSupportingTextRightId = (typeof TextFieldSupportingTextRightId)[keyof typeof TextFieldSupportingTextRightId];
