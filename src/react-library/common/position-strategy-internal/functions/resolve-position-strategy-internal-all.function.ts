import type { IMarginHorizontal, IMarginVertical } from "../../interfaces";
import type { Size } from "../../units";

import { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalAll } from "../types/position-strategy-internal-all.type";

/**
 * Resolve appropriate margins for {@link PositionStrategyInternalAll}
 * @param positionStrategy
 * @param margin
 */
export function resolvePositionStrategyInternalAll<TMarginHorizontal extends Size, TMarginVertical extends Size>(
	positionStrategy: PositionStrategyInternal,
	margin?: (
		Partial<IMarginHorizontal<TMarginHorizontal>> &
		Partial<IMarginVertical<TMarginVertical>>
	)
): PositionStrategyInternalAll<TMarginHorizontal, TMarginVertical> {
	switch (positionStrategy) {
		case PositionStrategyInternal.BottomCenter:
			return {
				positionType: positionStrategy,
				marginBottom: margin?.marginVertical
			};
		case PositionStrategyInternal.BottomLeft:
			return {
				positionType: positionStrategy,
				marginBottom: margin?.marginVertical,
				marginLeft: margin?.marginHorizontal
			};
		case PositionStrategyInternal.BottomRight:
			return {
				positionType: positionStrategy,
				marginBottom: margin?.marginVertical,
				marginRight: margin?.marginHorizontal
			};
		case PositionStrategyInternal.MiddleCenter:
			return {
				positionType: positionStrategy
			};
		case PositionStrategyInternal.MiddleLeft:
			return {
				positionType: positionStrategy,
				marginLeft: margin?.marginHorizontal
			};
		case PositionStrategyInternal.MiddleRight:
			return {
				positionType: positionStrategy,
				marginRight: margin?.marginHorizontal
			};
		case PositionStrategyInternal.TopCenter:
			return {
				positionType: positionStrategy,
				marginTop: margin?.marginVertical
			};
		case PositionStrategyInternal.TopLeft:
			return {
				positionType: positionStrategy,
				marginLeft: margin?.marginHorizontal,
				marginTop: margin?.marginVertical
			};
		case PositionStrategyInternal.TopRight:
			return {
				positionType: positionStrategy,
				marginRight: margin?.marginHorizontal,
				marginTop: margin?.marginVertical
			};
	}
}
