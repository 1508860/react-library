import type { PropsWithChildren } from "react";

import type { Callback, IDirection, IDurationMs, IOnComplete, ITiming } from "@react-library/common";

import type { TransitionFadeDirection } from "../enums/transition-fade-direction.type";
import type { TransitionFadeTiming } from "../enums/transition-fade-timing.type";

/**
 * Props for transition fade component
 */
export type TransitionFadeProps = (
	IDirection<TransitionFadeDirection> &
	IDurationMs<number> &
	Partial<IOnComplete<Callback<void>>> &
	PropsWithChildren &
	ITiming<TransitionFadeTiming>
);
