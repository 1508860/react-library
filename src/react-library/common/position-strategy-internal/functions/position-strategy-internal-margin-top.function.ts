import type { Size } from "../../units";
import { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalAll } from "../types/position-strategy-internal-all.type";

/**
 * Resolve margin top value for {@link positionStrategy}
 * @param positionStrategy
 */
export function positionStrategyInternalMarginTop(positionStrategy: PositionStrategyInternalAll<Size, Size>): Size | undefined {
	switch (positionStrategy.positionType) {
		case PositionStrategyInternal.TopCenter:
		case PositionStrategyInternal.TopLeft:
		case PositionStrategyInternal.TopRight:
			return positionStrategy.marginTop ?? undefined;
		default:
			return undefined;
	}
}
