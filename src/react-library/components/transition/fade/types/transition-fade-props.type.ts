import type { PropsWithChildren } from "react";

import type {
	CallbackWithParameter,
	IDirection,
	IDurationMs,
	IHeight,
	IOnComplete,
	ITiming,
	IWidth,
	Size
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionFadeDirection } from "../enums/transition-fade-direction.type";
import type { TransitionFadeOnCompleteParam } from "./transition-fade-on-complete-param.type";

/**
 * Props for transition fade component
 */
export type TransitionFadeProps = (
	IDirection<TransitionFadeDirection> &
	IDurationMs<number> &
	Partial<IHeight<Size>> &
	Partial<IOnComplete<CallbackWithParameter<TransitionFadeOnCompleteParam, void>>> &
	PropsWithChildren &
	ITiming<TransitionTiming> &
	Partial<IWidth<Size>>
);
