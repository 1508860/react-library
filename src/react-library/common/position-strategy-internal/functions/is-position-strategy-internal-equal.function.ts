import type { Size } from "../../units";
import { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalAll } from "../types/position-strategy-internal-all.type";

/**
 * Compare two objects of type {@link PositionStrategyInternalAll} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isPositionStrategyInternalEqual(value1: PositionStrategyInternalAll<Size, Size>, value2: PositionStrategyInternalAll<Size, Size>): boolean {
	return (
		(
			value1.positionType === PositionStrategyInternal.BottomCenter &&
			value2.positionType === value1.positionType &&
			value1.marginBottom === value2.marginBottom
		) ||
		(
			value1.positionType === PositionStrategyInternal.BottomLeft &&
			value2.positionType === value1.positionType &&
			value1.marginBottom === value2.marginBottom &&
			value1.marginLeft === value2.marginLeft
		) ||
		(
			value1.positionType === PositionStrategyInternal.BottomRight &&
			value2.positionType === value1.positionType &&
			value1.marginBottom === value2.marginBottom &&
			value1.marginRight === value2.marginRight
		) ||
		(
			value1.positionType === PositionStrategyInternal.MiddleCenter &&
			value2.positionType === value1.positionType
		) ||
		(
			value1.positionType === PositionStrategyInternal.MiddleLeft &&
			value2.positionType === value1.positionType &&
			value1.marginLeft === value2.marginLeft
		) ||
		(
			value1.positionType === PositionStrategyInternal.MiddleRight &&
			value2.positionType === value1.positionType &&
			value1.marginRight === value2.marginRight
		) ||
		(
			value1.positionType === PositionStrategyInternal.TopCenter &&
			value2.positionType === value1.positionType &&
			value1.marginTop === value2.marginTop
		) ||
		(
			value1.positionType === PositionStrategyInternal.TopLeft &&
			value2.positionType === value1.positionType &&
			value1.marginLeft === value2.marginLeft &&
			value1.marginTop === value2.marginTop
		) ||
		(
			value1.positionType === PositionStrategyInternal.TopRight &&
			value2.positionType === value1.positionType &&
			value1.marginRight === value2.marginRight &&
			value1.marginTop === value2.marginTop
		)
	);
}
