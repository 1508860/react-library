import type { ReactElement } from "react";

import type {
	IContent,
	IPositionStrategy,
	PositionStrategyExternalAll,
	PrefixKeys,
	SizePx
} from "@react-library/common";

/**
 * Tooltip arrow props that are only used internally within the tooltip hierarchy
 * Not to be exposed to the consumer
 */
type TooltipArrowPropsPrivate<TContent extends ReactElement> = (
	PrefixKeys<IPositionStrategy<PositionStrategyExternalAll<SizePx, SizePx> | undefined>, "tooltip"> &
	IContent<TContent>
);

/**
 * Full Tooltip arrow props from {@link TooltipArrowPropsPrivate} and {@link TooltipArrowPropsPublic}
 */
export type TooltipArrowProps<TContent extends ReactElement> = (
	TooltipArrowPropsPrivate<TContent>
);
