import type { PropsWithChildren } from "react";

import type { Callback, IDirection, IDurationMs, IOnComplete } from "@react-library/common";

import type { TransitionFadeDirection } from "../enums/transition-fade-direction.type";

/**
 * Props for transition fade component
 */
export type TransitionFadeProps = (
	IDirection<TransitionFadeDirection> &
	IDurationMs<number> &
	Partial<IOnComplete<Callback<void>>> &
	PropsWithChildren
);
