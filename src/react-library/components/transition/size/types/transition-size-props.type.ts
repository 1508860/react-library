import type { ReactElement } from "react";

import type {
	Callback,
	IChild,
	IDirection,
	IDurationMs,
	IOnComplete,
	ITiming
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionSizeDirection } from "../enums/transition-size-direction.type";
import type { TransitionSizeDirectionProps } from "./transition-size-direction-props.type";

/**
 * Props for transition size component
 */
export type TransitionSizeProps = (
	IChild<ReactElement> &
	IDirection<TransitionSizeDirection> &
	IDurationMs<number> &
	Partial<IOnComplete<Callback<void>>> &
	ITiming<TransitionTiming> &
	TransitionSizeDirectionProps
);
