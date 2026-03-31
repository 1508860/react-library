import type { PropsWithChildren } from "react";

import type {
	CallbackWithParameter,
	IDurationMs,
	IOnComplete,
	IRotate,
	ITiming,
	ScaleDegreesState
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionRotateOnCompleteParam } from "./transition-rotate-on-complete-param.type";

/**
 * Props for transition rotate component
*/
export type TransitionRotateProps = (
	IDurationMs<number> &
	Partial<IOnComplete<CallbackWithParameter<TransitionRotateOnCompleteParam, void>>> &
	PropsWithChildren &
	IRotate<ScaleDegreesState> &
	ITiming<TransitionTiming>
);
