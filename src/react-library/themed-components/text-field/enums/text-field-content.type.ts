/**
 * Text field component content types
 */
export const TextFieldContent = {
	Currency: "currency",
	Number: "number",
	Text: "text",
	TextArea: "text-area"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TextFieldContent}
 */
export type TextFieldContent = (typeof TextFieldContent)[keyof typeof TextFieldContent];
