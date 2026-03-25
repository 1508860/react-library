import type { PropsWithChildren } from "react";

import type { IDirection, IFullRotationDurationMs, ITiming } from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionRotateIndefiniteDirection } from "../enums/transition-rotate-indefinite-direction.type";

/**
 * Props for transition rotate indefinite component
 */
export type TransitionRotateIndefiniteProps = (
	IDirection<TransitionRotateIndefiniteDirection> &
	IFullRotationDurationMs<number> &
	PropsWithChildren &
	ITiming<TransitionTiming>
);
