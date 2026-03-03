import type { IMarginHorizontal, IMarginVertical } from "../../interfaces";
import type { Size } from "../../units";

import { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalAll } from "../types/position-strategy-external-all.type";

/**
 * Resolve appropriate margins for {@link PositionStrategyExternalAll}
 * @param positionStrategy
 * @param margin
 */
export function resolvePositionStrategyExternalAll<TMarginHorizontal extends Size, TMarginVertical extends Size>(
	positionStrategy: PositionStrategyExternal,
	margin?: (
		Partial<IMarginHorizontal<TMarginHorizontal>> &
		Partial<IMarginVertical<TMarginVertical>>
	)
): PositionStrategyExternalAll<TMarginHorizontal, TMarginVertical> {
	switch (positionStrategy) {
		case PositionStrategyExternal.BottomCenter:
			return {
				positionType: positionStrategy,
				marginTop: margin?.marginVertical
			};
		case PositionStrategyExternal.BottomEnd:
			return {
				positionType: positionStrategy,
				marginTop: margin?.marginVertical
			};
		case PositionStrategyExternal.BottomLeft:
			return {
				positionType: positionStrategy,
				marginRight: margin?.marginHorizontal,
				marginTop: margin?.marginVertical
			};
		case PositionStrategyExternal.BottomRight:
			return {
				positionType: positionStrategy,
				marginLeft: margin?.marginHorizontal,
				marginTop: margin?.marginVertical
			};
		case PositionStrategyExternal.BottomStart:
			return {
				positionType: positionStrategy,
				marginTop: margin?.marginVertical
			};
		case PositionStrategyExternal.LeftCenter:
			return {
				positionType: positionStrategy,
				marginRight: margin?.marginHorizontal
			};
		case PositionStrategyExternal.LeftEnd:
			return {
				positionType: positionStrategy,
				marginRight: margin?.marginHorizontal
			};
		case PositionStrategyExternal.LeftStart:
			return {
				positionType: positionStrategy,
				marginRight: margin?.marginHorizontal
			};
		case PositionStrategyExternal.RightCenter:
			return {
				positionType: positionStrategy,
				marginLeft: margin?.marginHorizontal
			};
		case PositionStrategyExternal.RightEnd:
			return {
				positionType: positionStrategy,
				marginLeft: margin?.marginHorizontal
			};
		case PositionStrategyExternal.RightStart:
			return {
				positionType: positionStrategy,
				marginLeft: margin?.marginHorizontal
			};
		case PositionStrategyExternal.TopCenter:
			return {
				positionType: positionStrategy,
				marginBottom: margin?.marginVertical
			};
		case PositionStrategyExternal.TopEnd:
			return {
				positionType: positionStrategy,
				marginBottom: margin?.marginVertical
			};
		case PositionStrategyExternal.TopLeft:
			return {
				positionType: positionStrategy,
				marginBottom: margin?.marginVertical,
				marginRight: margin?.marginHorizontal
			};
		case PositionStrategyExternal.TopRight:
			return {
				positionType: positionStrategy,
				marginBottom: margin?.marginVertical,
				marginLeft: margin?.marginHorizontal
			};
		case PositionStrategyExternal.TopStart:
			return {
				positionType: positionStrategy,
				marginBottom: margin?.marginVertical
			};
	}
}
