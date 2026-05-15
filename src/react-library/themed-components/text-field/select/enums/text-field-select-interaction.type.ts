/**
 * Text field component interaction types
 */
export const TextFieldSelectInteraction = {
	Multi: "multi",
	Single: "single"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TextFieldSelectInteraction}
 */
export type TextFieldSelectInteraction = (typeof TextFieldSelectInteraction)[keyof typeof TextFieldSelectInteraction];
