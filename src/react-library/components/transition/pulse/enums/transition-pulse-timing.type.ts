/**
 * Sets the timing of the pulse transition
 */
export const TransitionPulseTiming = {
	Ease: "ease",
	EaseInOut: "ease-in-out",
	Linear: "linear"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TransitionPulseTiming}
 */
export type TransitionPulseTiming = (typeof TransitionPulseTiming)[keyof typeof TransitionPulseTiming];
