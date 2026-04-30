import type { ReactElement } from "react";

import type {
	Callback,
	Colour,
	IChild,
	IColour,
	IDurationMs,
	IHeight,
	IOnComplete,
	ITiming,
	IWidth,
	Size
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";

/**
 * Props for transition colour component
 */
export type TransitionColourProps = (
	Partial<IChild<ReactElement>> &
	IColour<Colour> &
	IDurationMs<number> &
	Partial<IHeight<Size>> &
	Partial<IOnComplete<Callback<void>>> &
	ITiming<TransitionTiming> &
	Partial<IWidth<Size>>
);
