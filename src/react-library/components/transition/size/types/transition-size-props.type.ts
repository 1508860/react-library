import type { ReactElement } from "react";

import type {
	Callback,
	IChild,
	IDirection,
	IDurationMs,
	IHeight,
	IOnComplete,
	ITiming,
	IWidth
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionSizeDirection } from "../enums/transition-size-direction.type";
import type { TransitionSizeUnits } from "./transition-size-units.type";

/**
 * Props for transition size component
 */
export type TransitionSizeProps = (
	IChild<ReactElement> &
	IDirection<TransitionSizeDirection> &
	IDurationMs<number> &
	IHeight<TransitionSizeUnits> &
	Partial<IOnComplete<Callback<void>>> &
	ITiming<TransitionTiming> &
	IWidth<TransitionSizeUnits>
);
