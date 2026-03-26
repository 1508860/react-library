/**
 * Sets the direction of the size collapse transition
 */
export const TransitionSizeCollapseDirection = {
	All: "all",
	Horizontal: "horizontal",
	Vertical: "vertical"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TransitionSizeCollapseDirection}
 */
export type TransitionSizeCollapseDirection = (typeof TransitionSizeCollapseDirection)[keyof typeof TransitionSizeCollapseDirection];
