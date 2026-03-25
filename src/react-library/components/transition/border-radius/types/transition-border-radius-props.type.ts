import type { ReactElement } from "react";

import type {
	Callback,
	IBorderBottomLeftRadius,
	IBorderBottomRightRadius,
	IBorderTopLeftRadius,
	IBorderTopRightRadius,
	IChild,
	IDurationMs,
	IOnComplete,
	ITiming
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionBorderRadiusUnits } from "./transition-border-radius-units.type";

/**
 * Props for transition border radius component
 */
export type TransitionBorderRadiusProps = (
	IBorderBottomLeftRadius<TransitionBorderRadiusUnits> &
	IBorderBottomRightRadius<TransitionBorderRadiusUnits> &
	IBorderTopLeftRadius<TransitionBorderRadiusUnits> &
	IBorderTopRightRadius<TransitionBorderRadiusUnits> &
	IChild<ReactElement> &
	IDurationMs<number> &
	Partial<IOnComplete<Callback<void>>> &
	ITiming<TransitionTiming>
);
