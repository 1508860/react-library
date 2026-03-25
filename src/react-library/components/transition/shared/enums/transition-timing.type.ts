/**
 * Sets the timing of the transition
 */
export const TransitionTiming = {
	Ease: "ease",
	EaseInOut: "ease-in-out",
	Linear: "linear",
	OvershootInOut: "overshoot-in-out"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TransitionTiming}
 */
export type TransitionTiming = (typeof TransitionTiming)[keyof typeof TransitionTiming];
