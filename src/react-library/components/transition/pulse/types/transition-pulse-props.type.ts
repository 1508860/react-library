import type {
	Callback,
	Colour,
	IColour,
	IDurationMs,
	IOnComplete,
	ITiming
} from "@react-library/common";

import type { TransitionPulseTiming } from "../enums/transition-pulse-timing.type";
import type { TransitionPulseInsetData } from "./transition-pulse-inset-data.type";

/**
 * Props for transition pulse component
 */
export type TransitionPulseProps = (
	IColour<Colour> &
	IDurationMs<number> &
	Partial<IOnComplete<Callback<void>>> &
	ITiming<TransitionPulseTiming> &
	TransitionPulseInsetData
);
