import type { PropsWithChildren } from "react";

import type {
	IDurationMs,
	IRotate,
	ITiming,
	ScaleDegreesState
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";

/**
 * Props for transition rotate component
*/
export type TransitionRotateProps = (
	IDurationMs<number> &
	PropsWithChildren &
	IRotate<ScaleDegreesState> &
	ITiming<TransitionTiming>
);
