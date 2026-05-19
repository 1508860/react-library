/**
 * Compare two {@link Date} and check if the date (not including time) is equal
 * @param value1
 * @param value2
 */
export function isDateEqual(value1: Date, value2: Date): boolean {
	return (
		value1.getUTCFullYear() === value2.getUTCFullYear() &&
		value1.getUTCMonth() === value2.getUTCMonth() &&
		value1.getUTCDate() === value2.getUTCDate()
	);
}
