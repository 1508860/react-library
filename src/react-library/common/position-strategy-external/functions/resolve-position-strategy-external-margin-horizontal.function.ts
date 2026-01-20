import type { Size } from "../../units";
import { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalAll } from "../types/position-strategy-external-all.type";

/**
 * Function to work out the horizontal size of a position strategy
 * Returns undefined if not valid
 * @param positionStrategy
 */
export function resolvePositionStrategyExternalMarginHorizontal<TSizeHorizontal extends Size>(
	positionStrategy: PositionStrategyExternalAll<TSizeHorizontal, Size>
): TSizeHorizontal | undefined {
	switch (positionStrategy.positionType) {
		case PositionStrategyExternal.BottomLeft:
		case PositionStrategyExternal.LeftCenter:
		case PositionStrategyExternal.LeftEnd:
		case PositionStrategyExternal.LeftStart:
		case PositionStrategyExternal.TopLeft:
			return positionStrategy.marginRight;
		case PositionStrategyExternal.BottomRight:
		case PositionStrategyExternal.RightCenter:
		case PositionStrategyExternal.RightEnd:
		case PositionStrategyExternal.RightStart:
		case PositionStrategyExternal.TopRight:
			return positionStrategy.marginLeft;
	}

	return undefined
}
