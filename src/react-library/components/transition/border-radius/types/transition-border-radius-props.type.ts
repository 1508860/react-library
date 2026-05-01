import type { PropsWithChildren } from "react";

import type {
	Callback,
	IDurationMs,
	IHeight,
	IOnComplete,
	ITiming,
	IWidth,
	Size
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";

import type { TransitionBorderRadiusPropsScope } from "./transition-border-radius-props-scope.type";

/**
 * Props for transition border radius component
*/
export type TransitionBorderRadiusProps = (
	IDurationMs<number> &
	Partial<IHeight<Size>> &
	Partial<IOnComplete<Callback<void>>> &
	PropsWithChildren &
	ITiming<TransitionTiming> &
	TransitionBorderRadiusPropsScope &
	Partial<IWidth<Size>>
);
