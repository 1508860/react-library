import type { PositionStrategyExternal } from "../enums/position-strategy-external.type";

/**
 * Compare value of type {@link PositionStrategyExternal} and check if it exists in the comparison array
 * @param value
 * @param comparisonValues
 */
export function isPositionStrategyExternalTypeIn<TPositionStrategyExternalType extends PositionStrategyExternal>(
	value: TPositionStrategyExternalType,
	comparisonValues: [TPositionStrategyExternalType, ...Array<TPositionStrategyExternalType>]
): boolean {
	return comparisonValues.includes(value);
}
