import type { DatePickerYears } from "../types/date-picker-years.type";

/**
 * Compare two {@link DatePickerYears} collections and check if the date (not including time) is equal and exists in both collections
 * @param value1
 * @param value2
 */
export function isDatePickerYearsEqual(value1: DatePickerYears, value2: DatePickerYears): boolean {

	if (value1.length !== value2.length) return false;

	const value1Ordered = value1.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
	const value2Ordered = value2.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));

	return value1Ordered.every((x, i) => x === value2Ordered[i]);
}
