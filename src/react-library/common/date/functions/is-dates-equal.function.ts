import { isDateEqual } from "./is-date-equal.function";

/**
 * Compare two {@link Date} collections and check if the date (not including time) is equal and exists in both collections
 * @param value1
 * @param value2
 */
export function isDatesEqual(value1: Array<Date>, value2: Array<Date>): boolean {

	if (value1.length !== value2.length) return false;

	const value1Ordered = value1.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
	const value2Ordered = value2.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));

	return value1Ordered.every((x, i) => isDateEqual(x, value2Ordered[i]));
}
