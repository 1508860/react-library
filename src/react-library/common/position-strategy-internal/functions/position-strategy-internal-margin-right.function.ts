import type { Size } from "../../units";
import { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalAll } from "../types/position-strategy-internal-all.type";

/**
 * Resolve margin right value for {@link positionStrategy}
 * @param positionStrategy
 */
export function positionStrategyInternalMarginRight<TMarginRight extends Size>(
	positionStrategy: PositionStrategyInternalAll<TMarginRight, Size>
): TMarginRight | undefined {
	switch (positionStrategy.positionType) {
		case PositionStrategyInternal.BottomRight:
		case PositionStrategyInternal.MiddleRight:
		case PositionStrategyInternal.TopRight:
			return positionStrategy.marginRight ?? undefined;
		default:
			return undefined;
	}
}
