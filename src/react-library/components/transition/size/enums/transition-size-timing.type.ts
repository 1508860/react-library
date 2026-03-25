import type { Property } from "csstype";
import type { Extends } from "@react-library/common";

/**
 * Sets the timing of the size transition
 */
export const TransitionSizeTiming = {
	Ease: "ease",
	EaseInOut: "ease-in-out",
	Linear: "linear"
} as const satisfies Record<string, Extends<Property.AnimationTimingFunction, ("ease" | "ease-in-out" | "linear")>>;

/**
 * Type for {@link TransitionSizeTiming}
 */
export type TransitionSizeTiming = (typeof TransitionSizeTiming)[keyof typeof TransitionSizeTiming];
