/**
 * Sets the direction of the size transition
 */
export const TransitionSizeDirection = {
	All: "all",
	Horizontal: "horizontal",
	Vertical: "vertical"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TransitionSizeDirection}
 */
export type TransitionSizeDirection = (typeof TransitionSizeDirection)[keyof typeof TransitionSizeDirection];
