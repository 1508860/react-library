import type {
	Callback,
	Colour,
	IColour,
	IDirection,
	IDurationMs,
	IOnComplete
} from "@react-library/common";

import type { TransitionPulseInsetData } from "./transition-pulse-inset-data.type";
import type { TransitionPulseDirection } from "../enums/transition-pulse-direction.type";

/**
 * Props for transition pulse component
 */
export type TransitionPulseProps = (
	IColour<Colour> &
	IDirection<TransitionPulseDirection> &
	IDurationMs<number> &
	Partial<IOnComplete<Callback<void>>> &
	TransitionPulseInsetData
);
