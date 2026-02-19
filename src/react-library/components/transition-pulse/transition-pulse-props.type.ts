import type {
	Callback,
	Colour,
	IColour,
	IDurationMs,
	IOnDismiss,
	IOpacity,
	StyleOpacity
} from "@react-library/common";

import type { TransitionPulseInsetData } from "./transition-pulse-inset-data.type";

/**
 * Props for transition pulse component
 */
export type TransitionPulseProps = (
	IColour<Colour> &
	IDurationMs<number> &
	IOnDismiss<Callback<void>> &
	IOpacity<StyleOpacity> &
	TransitionPulseInsetData
);
