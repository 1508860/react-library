import type { Size } from "../../units";
import { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalAll } from "../types/position-strategy-internal-all.type";

/**
 * Resolve margin bottom value for {@link positionStrategy}
 * @param positionStrategy
 */
export function positionStrategyInternalMarginBottom(positionStrategy: PositionStrategyInternalAll<Size, Size>): Size | undefined {
	switch (positionStrategy.positionType) {
		case PositionStrategyInternal.BottomCenter:
		case PositionStrategyInternal.BottomLeft:
		case PositionStrategyInternal.BottomRight:
			return positionStrategy.marginBottom ?? undefined;
		default:
			return undefined;
	}
}
