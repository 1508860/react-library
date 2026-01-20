import { PositionStrategyExternal } from "@react-library/common";
import type { TooltipPositionStrategiesExternal } from "@react-library/components";

/**
 * Position strategy external for split button menu tooltip
 */
export const BUTTON_SPLIT_MENU_TOOLTIP_POSITION_STRATEGY_EXTERNAL: TooltipPositionStrategiesExternal = [
	{ positionType: PositionStrategyExternal.BottomEnd, marginTop: 4 },
	{ positionType: PositionStrategyExternal.BottomStart, marginTop: 4 },
	{ positionType: PositionStrategyExternal.TopEnd, marginBottom: 4 },
	{ positionType: PositionStrategyExternal.TopStart, marginBottom: 4 }
];
