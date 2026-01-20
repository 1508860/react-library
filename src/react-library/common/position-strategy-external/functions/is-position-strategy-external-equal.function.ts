import type { Size } from "../../units";
import { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalAll } from "../types/position-strategy-external-all.type";

/**
 * Compare two objects of type {@link PositionStrategyExternalAll} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isPositionStrategyExternalEqual(value1: PositionStrategyExternalAll<Size, Size>, value2: PositionStrategyExternalAll<Size, Size>): boolean {
	return (
		(
			value1.positionType === PositionStrategyExternal.BottomCenter &&
			value2.positionType === value1.positionType &&
			value1.marginTop === value2.marginTop
		) ||
		(
			value1.positionType === PositionStrategyExternal.BottomEnd &&
			value2.positionType === value1.positionType &&
			value1.marginTop === value2.marginTop
		) ||
		(
			value1.positionType === PositionStrategyExternal.BottomLeft &&
			value2.positionType === value1.positionType &&
			value1.marginRight === value2.marginRight &&
			value1.marginTop === value2.marginTop
		) ||
		(
			value1.positionType === PositionStrategyExternal.BottomRight &&
			value2.positionType === value1.positionType &&
			value1.marginLeft === value2.marginLeft &&
			value1.marginTop === value2.marginTop
		) ||
		(
			value1.positionType === PositionStrategyExternal.BottomStart &&
			value2.positionType === value1.positionType &&
			value1.marginTop === value2.marginTop
		) ||
		(
			value1.positionType === PositionStrategyExternal.LeftCenter &&
			value2.positionType === value1.positionType &&
			value1.marginRight === value2.marginRight
		) ||
		(
			value1.positionType === PositionStrategyExternal.LeftEnd &&
			value2.positionType === value1.positionType &&
			value1.marginRight === value2.marginRight
		) ||
		(
			value1.positionType === PositionStrategyExternal.LeftStart &&
			value2.positionType === value1.positionType &&
			value1.marginRight === value2.marginRight
		) ||
		(
			value1.positionType === PositionStrategyExternal.RightCenter &&
			value2.positionType === value1.positionType &&
			value1.marginLeft === value2.marginLeft
		) ||
		(
			value1.positionType === PositionStrategyExternal.RightEnd &&
			value2.positionType === value1.positionType &&
			value1.marginLeft === value2.marginLeft
		) ||
		(
			value1.positionType === PositionStrategyExternal.RightStart &&
			value2.positionType === value1.positionType &&
			value1.marginLeft === value2.marginLeft
		) ||
		(
			value1.positionType === PositionStrategyExternal.TopCenter &&
			value2.positionType === value1.positionType &&
			value1.marginBottom === value2.marginBottom
		) ||
		(
			value1.positionType === PositionStrategyExternal.TopEnd &&
			value2.positionType === value1.positionType &&
			value1.marginBottom === value2.marginBottom
		) ||
		(
			value1.positionType === PositionStrategyExternal.TopLeft &&
			value2.positionType === value1.positionType &&
			value1.marginBottom === value2.marginBottom &&
			value1.marginRight === value2.marginRight
		) ||
		(
			value1.positionType === PositionStrategyExternal.TopRight &&
			value2.positionType === value1.positionType &&
			value1.marginBottom === value2.marginBottom &&
			value1.marginLeft === value2.marginLeft
		) ||
		(
			value1.positionType === PositionStrategyExternal.TopStart &&
			value2.positionType === value1.positionType &&
			value1.marginBottom === value2.marginBottom
		)
	);
}
