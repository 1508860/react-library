import type { ReactElement } from "react";

import type {
	IContent,
	ITooltipPositionStrategy,
	PositionStrategyExternalAll,
	SizePx
} from "@react-library/common";

/**
 * Tooltip arrow props that are only used internally within the tooltip hierarchy
 * Not to be exposed to the consumer
 */
type TooltipArrowPropsPrivate<TContent extends ReactElement> = (
	ITooltipPositionStrategy<PositionStrategyExternalAll<SizePx, SizePx> | undefined> &
	IContent<TContent>
);

/**
 * Full Tooltip arrow props from {@link TooltipArrowPropsPrivate} and {@link TooltipArrowPropsPublic}
 */
export type TooltipArrowProps<TContent extends ReactElement> = (
	TooltipArrowPropsPrivate<TContent>
);
