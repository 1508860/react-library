import type { Property } from "csstype";
import type { Extends } from "@react-library/common";

/**
 * Sets the timing of the fade transition
 */
export const TransitionFadeTiming = {
	Ease: "ease",
	EaseInOut: "ease-in-out",
	Linear: "linear"
} as const satisfies Record<string, Extends<Property.AnimationTimingFunction, ("ease" | "ease-in-out" | "linear")>>;

/**
 * Type for {@link TransitionFadeTiming}
 */
export type TransitionFadeTiming = (typeof TransitionFadeTiming)[keyof typeof TransitionFadeTiming];
