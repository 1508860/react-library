import type {
	Callback,
	Colour,
	IColour,
	IDurationMs,
	IOnComplete,
	ITiming
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionPulseInsetData } from "./transition-pulse-inset-data.type";

/**
 * Props for transition pulse component
 */
export type TransitionPulseProps = (
	IColour<Colour> &
	IDurationMs<number> &
	Partial<IOnComplete<Callback<void>>> &
	ITiming<TransitionTiming> &
	TransitionPulseInsetData
);
