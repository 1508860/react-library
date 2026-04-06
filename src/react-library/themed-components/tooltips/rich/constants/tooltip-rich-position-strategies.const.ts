import { PositionStrategyExternal } from "@react-library/common";
import type { TooltipPositionStrategiesExternal } from "@react-library/components";

import { TOOLTIP_RICH_POSITION_MARGIN } from "./tooltip-rich-margin.const";

/**
 * Position strategies for the tooltip rich component
 */
export const TOOLTIP_RICH_POSITION_STRATEGIES: TooltipPositionStrategiesExternal = [
	{ positionType: PositionStrategyExternal.BottomLeft, marginRight: TOOLTIP_RICH_POSITION_MARGIN, marginTop: TOOLTIP_RICH_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.BottomRight, marginLeft: TOOLTIP_RICH_POSITION_MARGIN, marginTop: TOOLTIP_RICH_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.TopLeft, marginRight: TOOLTIP_RICH_POSITION_MARGIN, marginBottom: TOOLTIP_RICH_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.TopRight, marginLeft: TOOLTIP_RICH_POSITION_MARGIN, marginBottom: TOOLTIP_RICH_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.BottomCenter, marginTop: TOOLTIP_RICH_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.TopCenter, marginBottom: TOOLTIP_RICH_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.LeftCenter, marginRight: TOOLTIP_RICH_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.RightCenter, marginLeft: TOOLTIP_RICH_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.BottomEnd, marginTop: TOOLTIP_RICH_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.BottomStart, marginTop: TOOLTIP_RICH_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.LeftEnd, marginRight: TOOLTIP_RICH_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.LeftStart, marginRight: TOOLTIP_RICH_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.RightEnd, marginLeft: TOOLTIP_RICH_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.RightStart, marginLeft: TOOLTIP_RICH_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.TopEnd, marginBottom: TOOLTIP_RICH_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.TopStart, marginBottom: TOOLTIP_RICH_POSITION_MARGIN }
];
