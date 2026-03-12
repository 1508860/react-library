import type { Property } from "csstype";
import type { Extends } from "@react-library/common";

/**
 * Sets the timing of the pulse transition
 */
export const TransitionPulseTiming = {
	Ease: "ease",
	EaseInOut: "ease-in-out",
	Linear: "linear"
} as const satisfies Record<string, Extends<Property.AnimationTimingFunction, ("ease" | "ease-in-out" | "linear")>>;

/**
 * Type for {@link TransitionPulseTiming}
 */
export type TransitionPulseTiming = (typeof TransitionPulseTiming)[keyof typeof TransitionPulseTiming];
