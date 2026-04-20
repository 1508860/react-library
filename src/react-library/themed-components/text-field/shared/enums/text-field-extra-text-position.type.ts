/**
 * Text field component content types
 */
export const TextFieldExtraTextPosition = {
	End: "end",
	None: "none",
	Start: "start"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TextFieldExtraTextPosition}
 */
export type TextFieldExtraTextPosition = (typeof TextFieldExtraTextPosition)[keyof typeof TextFieldExtraTextPosition];
