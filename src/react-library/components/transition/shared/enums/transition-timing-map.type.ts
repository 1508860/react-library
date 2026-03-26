import type { Property } from "csstype";

import type { Extends } from "@react-library/common";

import { TRANSITION_TIMING_OVERSHOOT_IN_OUT } from "../constants/transition-timing-overshoot-in-out.const";
import { TransitionTiming } from "./transition-timing.type";

/**
 * Map timing of the transition
 */
export const TransitionTimingMap = {
	[TransitionTiming.Ease]: "ease",
	[TransitionTiming.EaseInOut]: "ease-in-out",
	[TransitionTiming.Linear]: "linear",
	[TransitionTiming.OvershootInOut]: TRANSITION_TIMING_OVERSHOOT_IN_OUT,
} as const satisfies Record<
	TransitionTiming,
	(
		Extends<Property.AnimationTimingFunction, ("ease" | "ease-in-out" | "linear")> |
		typeof TRANSITION_TIMING_OVERSHOOT_IN_OUT
	)
>;
