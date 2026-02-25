import type { ArrayMinLength1 } from "@react-library/common";
import type { TooltipPositionStrategyExternal } from "./tooltip-position-strategy-external.type";

/**
 * Type to enforce a single tooltip position strategy or an array of one or more tooltip position strategies
 */
export type TooltipPositionStrategiesExternal = ArrayMinLength1<TooltipPositionStrategyExternal>;
