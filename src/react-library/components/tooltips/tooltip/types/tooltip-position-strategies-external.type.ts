import type { ArrayMinLength1, PositionStrategyExternalAll, SizePx } from "@react-library/common";

/**
 * Type to enforce a single tooltip position strategy or an array of one or more tooltip position strategies
 */
export type TooltipPositionStrategiesExternal = ArrayMinLength1<PositionStrategyExternalAll<SizePx, SizePx>>;
