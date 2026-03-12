/**
 * Sets the timing of the rotate indefinite transition
 */
export const TransitionRotateIndefiniteTiming = {
	Ease: "ease",
	EaseInOut: "ease-in-out",
	Linear: "linear"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TransitionRotateIndefiniteTiming}
 */
export type TransitionRotateIndefiniteTiming = (typeof TransitionRotateIndefiniteTiming)[keyof typeof TransitionRotateIndefiniteTiming];
