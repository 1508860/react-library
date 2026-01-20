import type { PositionStrategyExternalAll, SizePx } from "@react-library/common";

/**
 * Type to enforce a single tooltip position strategy or an array of one or more tooltip position strategies
 */
export type TooltipPositionStrategiesExternal = (
	PositionStrategyExternalAll<SizePx, SizePx> |
	[PositionStrategyExternalAll<SizePx, SizePx>, ...Array<PositionStrategyExternalAll<SizePx, SizePx>>]
);
