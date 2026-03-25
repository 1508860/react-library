import type { ReactElement } from "react";

import type {
	Callback,
	IChild,
	IDurationMs,
	IOnComplete,
	IScope,
	IStyle,
	ITiming
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionBorderRadiusScope } from "../enums/transition-border-radius-scope.type";
import type { TransitionBorderRadiusStyleAll } from "./transition-border-radius-style-all.type";
import type { TransitionBorderRadiusStyleSingle } from "./transition-border-radius-style-single.type";

type TransitionBorderRadiusPropsBase<TTransitionBorderRadiusScope extends TransitionBorderRadiusScope, TStyle> = (
	IChild<ReactElement> &
	IDurationMs<number> &
	Partial<IOnComplete<Callback<void>>> &
	IScope<TTransitionBorderRadiusScope> &
	Partial<IStyle<TStyle>> &
	ITiming<TransitionTiming>
);

/**
 * Props for transition border radius component for the all scope
 */
export type TransitionBorderRadiusPropsAll = TransitionBorderRadiusPropsBase<typeof TransitionBorderRadiusScope.All, TransitionBorderRadiusStyleAll>;

/**
 * Props for transition border radius component for the single scope
 */
export type TransitionBorderRadiusPropsSingle = TransitionBorderRadiusPropsBase<typeof TransitionBorderRadiusScope.Single, TransitionBorderRadiusStyleSingle>;

/**
 * Props for transition border radius component
 */
export type TransitionBorderRadiusProps = (
	TransitionBorderRadiusPropsAll |
	TransitionBorderRadiusPropsSingle
);
