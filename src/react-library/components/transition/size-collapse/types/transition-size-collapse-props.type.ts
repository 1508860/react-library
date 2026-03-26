import type { ReactElement } from "react";

import type {
	Callback,
	IChild,
	IDirection,
	IDurationMs,
	IIsCollapsed,
	IOnComplete,
	ITiming
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionSizeCollapseDirection } from "../enums/transition-size-collapse-direction.type";

/**
 * Props for transition size collapse component
 */
export type TransitionSizeCollapseProps = (
	IChild<ReactElement> &
	IDirection<TransitionSizeCollapseDirection> &
	IDurationMs<number> &
	IIsCollapsed<boolean> &
	Partial<IOnComplete<Callback<void>>> &
	ITiming<TransitionTiming>
);
