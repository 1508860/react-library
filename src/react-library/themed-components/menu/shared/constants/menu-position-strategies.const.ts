import { PositionStrategyExternal } from "@react-library/common";
import type { TooltipPositionStrategiesExternal } from "@react-library/components";

import { MENU_POSITION_MARGIN } from "./menu-position-margin.const";

/**
 * Position strategies for the menu component
 */
export const MENU_POSITION_STRATEGIES: TooltipPositionStrategiesExternal = [
	{ positionType: PositionStrategyExternal.RightStart, marginLeft: MENU_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.RightEnd, marginLeft: MENU_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.LeftStart, marginRight: MENU_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.LeftEnd, marginRight: MENU_POSITION_MARGIN }
];
