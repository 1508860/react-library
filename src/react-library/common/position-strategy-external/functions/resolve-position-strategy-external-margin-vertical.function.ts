import type { Size } from "../../units";
import { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalAll } from "../types/position-strategy-external-all.type";

/**
 * Function to work out the vertical size of a position strategy
 * Returns undefined if not valid
 * @param positionStrategy
 */
export function resolvePositionStrategyExternalMarginVertical<TSizeVertical extends Size>(
	positionStrategy: PositionStrategyExternalAll<Size, TSizeVertical>
): TSizeVertical | undefined {
	switch (positionStrategy.positionType) {
		case PositionStrategyExternal.BottomCenter:
		case PositionStrategyExternal.BottomEnd:
		case PositionStrategyExternal.BottomLeft:
		case PositionStrategyExternal.BottomRight:
		case PositionStrategyExternal.BottomStart:
			return positionStrategy.marginTop;
		case PositionStrategyExternal.TopCenter:
		case PositionStrategyExternal.TopEnd:
		case PositionStrategyExternal.TopLeft:
		case PositionStrategyExternal.TopRight:
		case PositionStrategyExternal.TopStart:
			return positionStrategy.marginBottom;
	}

	return undefined
}
