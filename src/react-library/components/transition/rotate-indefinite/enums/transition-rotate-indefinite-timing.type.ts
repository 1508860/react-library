import type { Property } from "csstype";
import type { Extends } from "@react-library/common";

/**
 * Sets the timing of the rotate indefinite transition
 */
export const TransitionRotateIndefiniteTiming = {
	Ease: "ease",
	EaseInOut: "ease-in-out",
	Linear: "linear"
} as const satisfies Record<string, Extends<Property.AnimationTimingFunction, ("ease" | "ease-in-out" | "linear")>>;

/**
 * Type for {@link TransitionRotateIndefiniteTiming}
 */
export type TransitionRotateIndefiniteTiming = (typeof TransitionRotateIndefiniteTiming)[keyof typeof TransitionRotateIndefiniteTiming];
