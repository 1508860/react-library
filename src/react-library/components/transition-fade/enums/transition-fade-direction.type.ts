/**
 * Sets the direction of the fade transition
 */
export const TransitionFadeDirection = {
	In: "in",
	None: "none",
	Out: "out"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TransitionFadeDirection}
 */
export type TransitionFadeDirection = (typeof TransitionFadeDirection)[keyof typeof TransitionFadeDirection];
