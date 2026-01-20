import type { Size } from "../../units";
import { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalAll } from "../types/position-strategy-internal-all.type";

/**
 * Resolve margin left value for {@link positionStrategy}
 * @param positionStrategy
 */
export function positionStrategyInternalMarginLeft(positionStrategy: PositionStrategyInternalAll<Size, Size>): Size | undefined {
	switch (positionStrategy.positionType) {
		case PositionStrategyInternal.BottomLeft:
		case PositionStrategyInternal.MiddleLeft:
		case PositionStrategyInternal.TopLeft:
			return positionStrategy.marginLeft ?? undefined;
		default:
			return undefined;
	}
}
