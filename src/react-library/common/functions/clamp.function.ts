/**
 * Function to clamp a value between a min & max value
 * @param value
 * @param minValue
 * @param maxValue
 */
export function clamp(value: number, minValue: number, maxValue: number): number {
	return Math.max(minValue, Math.min(value, maxValue));
}
