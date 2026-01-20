/**
 * Button style types
 */
export const ButtonStyle = {
	Elevated: "elevated",
	Filled: "filled",
	Outline: "outline"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ButtonStyle}
 */
export type ButtonStyle = (typeof ButtonStyle)[keyof typeof ButtonStyle];
