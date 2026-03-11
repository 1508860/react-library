import type {
	Callback,
	Colour,
	IColour,
	IDurationMs,
	IOnComplete
} from "@react-library/common";

import type { TransitionPulseInsetData } from "./transition-pulse-inset-data.type";

/**
 * Props for transition pulse component
 */
export type TransitionPulseProps = (
	IColour<Colour> &
	IDurationMs<number> &
	Partial<IOnComplete<Callback<void>>> &
	TransitionPulseInsetData
);
