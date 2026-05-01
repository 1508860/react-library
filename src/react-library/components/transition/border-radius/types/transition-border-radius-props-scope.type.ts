import type { IScope, IStyle } from "@react-library/common";

import type { TransitionBorderRadiusScope } from "../enums/transition-border-radius-scope.type";
import type { TransitionBorderRadiusStyleAll } from "./transition-border-radius-style-all.type";
import type { TransitionBorderRadiusStyleSingle } from "./transition-border-radius-style-single.type";

type TransitionBorderRadiusPropsScopeBase<TScope extends TransitionBorderRadiusScope> = (
	IScope<TScope>
);

/**
 * Props for transition border radius component for the all scope
 */
export type TransitionBorderRadiusPropsScopeAll = (
	Partial<IStyle<TransitionBorderRadiusStyleAll>> &
	TransitionBorderRadiusPropsScopeBase<typeof TransitionBorderRadiusScope.All>
);

/**
 * Props for transition border radius component for the single scope
 */
export type TransitionBorderRadiusPropsScopeSingle = (
	Partial<IStyle<TransitionBorderRadiusStyleSingle>> &
	TransitionBorderRadiusPropsScopeBase<typeof TransitionBorderRadiusScope.Single>
);

/**
 * Props for transition border radius component
 */
export type TransitionBorderRadiusPropsScope = (
	TransitionBorderRadiusPropsScopeAll |
	TransitionBorderRadiusPropsScopeSingle
);
