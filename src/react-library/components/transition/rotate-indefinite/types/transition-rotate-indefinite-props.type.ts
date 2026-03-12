import type { PropsWithChildren } from "react";

import type { IDirection, IFullRotationDurationMs, ITiming } from "@react-library/common";

import type { TransitionRotateIndefiniteDirection } from "../enums/transition-rotate-indefinite-direction.type";
import type { TransitionRotateIndefiniteTiming } from "../enums/transition-rotate-indefinite-timing.type";

/**
 * Props for transition rotate indefinite component
 */
export type TransitionRotateIndefiniteProps = (
	IDirection<TransitionRotateIndefiniteDirection> &
	IFullRotationDurationMs<number> &
	PropsWithChildren &
	ITiming<TransitionRotateIndefiniteTiming>
);
