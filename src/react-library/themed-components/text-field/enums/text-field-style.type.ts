/**
 * Text field component style types
 */
export const TextFieldStyle = {
	Filled: "filled",
	Outlined: "outlined"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TextFieldStyle}
 */
export type TextFieldStyle = (typeof TextFieldStyle)[keyof typeof TextFieldStyle];
