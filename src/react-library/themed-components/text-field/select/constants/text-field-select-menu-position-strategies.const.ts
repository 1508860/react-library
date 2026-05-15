import { PositionStrategyExternal } from "@react-library/common";
import type { TooltipPositionStrategiesExternal } from "@react-library/components";

import { TEXT_FIELD_SELECT_MENU_POSITION_MARGIN } from "./text-field-select-menu-position-margin.const";

/**
 * Position strategies for the menu component
 */
export const TEXT_FIELD_SELECT_MENU_POSITION_STRATEGIES: TooltipPositionStrategiesExternal = [

	{ positionType: PositionStrategyExternal.BottomCenter, marginTop: TEXT_FIELD_SELECT_MENU_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.TopCenter, marginBottom: TEXT_FIELD_SELECT_MENU_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.BottomStart, marginTop: TEXT_FIELD_SELECT_MENU_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.BottomEnd, marginTop: TEXT_FIELD_SELECT_MENU_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.TopStart, marginBottom: TEXT_FIELD_SELECT_MENU_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.TopEnd, marginBottom: TEXT_FIELD_SELECT_MENU_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.RightStart, marginLeft: TEXT_FIELD_SELECT_MENU_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.RightEnd, marginLeft: TEXT_FIELD_SELECT_MENU_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.LeftStart, marginRight: TEXT_FIELD_SELECT_MENU_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.LeftEnd, marginRight: TEXT_FIELD_SELECT_MENU_POSITION_MARGIN }
];
