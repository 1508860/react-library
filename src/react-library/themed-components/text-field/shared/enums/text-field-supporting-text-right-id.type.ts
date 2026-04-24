/**
 * Text field supporting text right id
 */
export const TextFieldSupportingTextRightId = {
	MaxCharacterCount: "MaxCharacterCount",
	MaxCurrency: "MaxCurrency",
	MaxNumber: "MaxNumber",
	MaxWordCount: "MaxWordCount",
	MinCharacterCount: "MinCharacterCount",
	MinCurrency: "MinCurrency",
	MinNumber: "MinNumber"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TextFieldSupportingTextRightId}
 */
export type TextFieldSupportingTextRightId = (typeof TextFieldSupportingTextRightId)[keyof typeof TextFieldSupportingTextRightId];
