import type { ReactElement } from "react";

import type {
	Callback,
	IChild,
	IDurationMs,
	IIsCollapsed,
	IOnComplete,
	ITiming
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionSizeCollapseDirectionProps } from "./transition-size-collapse-direction-props.type";

/**
 * Props for transition size collapse component
 */
export type TransitionSizeCollapseProps = (
	IChild<ReactElement> &
	IDurationMs<number> &
	IIsCollapsed<boolean> &
	Partial<IOnComplete<Callback<void>>> &
	ITiming<TransitionTiming> &
	TransitionSizeCollapseDirectionProps
);
