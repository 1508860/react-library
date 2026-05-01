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

import type { TransitionBorderRadiusPropsScope } from "./transition-border-radius-props-scope.type";

/**
 * Props for transition border radius component
*/
export type TransitionBorderRadiusProps = (
	IChild<ReactElement> &
	IDurationMs<number> &
	Partial<IHeight<Size>> &
	Partial<IOnComplete<Callback<void>>> &
	ITiming<TransitionTiming> &
	TransitionBorderRadiusPropsScope &
	Partial<IWidth<Size>>
);
