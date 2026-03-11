/**
 * Sets the direction of the pulse transition
 */
export const TransitionPulseDirection = {
	In: "in",
	Out: "out"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TransitionPulseDirection}
 */
export type TransitionPulseDirection = (typeof TransitionPulseDirection)[keyof typeof TransitionPulseDirection];
