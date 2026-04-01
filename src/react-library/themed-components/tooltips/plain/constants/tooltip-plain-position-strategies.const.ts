import { PositionStrategyExternal } from "@react-library/common";
import type { TooltipPositionStrategiesExternal } from "@react-library/components";

import { TOOLTIP_PLAIN_POSITION_MARGIN } from "./tooltip-plain-margin.const";

/**
 * Position strategies for the tooltip plain component
 */
export const TOOLTIP_PLAIN_POSITION_STRATEGIES: TooltipPositionStrategiesExternal = [
	{ positionType: PositionStrategyExternal.BottomCenter, marginTop: TOOLTIP_PLAIN_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.TopCenter, marginBottom: TOOLTIP_PLAIN_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.LeftCenter, marginRight: TOOLTIP_PLAIN_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.RightCenter, marginLeft: TOOLTIP_PLAIN_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.BottomLeft, marginRight: TOOLTIP_PLAIN_POSITION_MARGIN, marginTop: TOOLTIP_PLAIN_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.BottomRight, marginLeft: TOOLTIP_PLAIN_POSITION_MARGIN, marginTop: TOOLTIP_PLAIN_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.TopLeft, marginRight: TOOLTIP_PLAIN_POSITION_MARGIN, marginBottom: TOOLTIP_PLAIN_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.TopRight, marginLeft: TOOLTIP_PLAIN_POSITION_MARGIN, marginBottom: TOOLTIP_PLAIN_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.BottomEnd, marginTop: TOOLTIP_PLAIN_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.BottomStart, marginTop: TOOLTIP_PLAIN_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.LeftEnd, marginRight: TOOLTIP_PLAIN_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.LeftStart, marginRight: TOOLTIP_PLAIN_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.RightEnd, marginLeft: TOOLTIP_PLAIN_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.RightStart, marginLeft: TOOLTIP_PLAIN_POSITION_MARGIN },

	{ positionType: PositionStrategyExternal.TopEnd, marginBottom: TOOLTIP_PLAIN_POSITION_MARGIN },
	{ positionType: PositionStrategyExternal.TopStart, marginBottom: TOOLTIP_PLAIN_POSITION_MARGIN }
];
