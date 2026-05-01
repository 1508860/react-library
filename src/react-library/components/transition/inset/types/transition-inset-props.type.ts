import type { ReactElement } from "react";

import type {
	Callback,
	IChild,
	IDurationMs,
	IHeight,
	IOnComplete,
	ITiming,
	IWidth,
	Size
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionPropsInsetAll } from "./transition-props-inset-all.type";

/**
 * Props for transition inset component
 */
export type TransitionInsetProps = (
	Partial<IChild<ReactElement>> &
	IDurationMs<number> &
	Partial<IHeight<Size>> &
	Partial<IOnComplete<Callback<void>>> &
	Partial<TransitionPropsInsetAll> &
	ITiming<TransitionTiming> &
	Partial<IWidth<Size>>
);
