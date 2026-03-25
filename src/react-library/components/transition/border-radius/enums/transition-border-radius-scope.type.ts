/**
 * Sets the scope of the border radius transition.
 * Allows styles to be set for all sides or single sides
 */
export const TransitionBorderRadiusScope = {
	All: "all",
	Single: "single"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TransitionBorderRadiusScope}
 */
export type TransitionBorderRadiusScope = (typeof TransitionBorderRadiusScope)[keyof typeof TransitionBorderRadiusScope];
