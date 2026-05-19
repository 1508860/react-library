/**
 * Compare two {@link Date} objects and check if the year is equal
 * @param value1
 * @param value2
 */
export function isYearEqual(value1: Date, value2: Date): boolean {
	return (
		value1.getUTCFullYear() === value2.getUTCFullYear()
	);
}
