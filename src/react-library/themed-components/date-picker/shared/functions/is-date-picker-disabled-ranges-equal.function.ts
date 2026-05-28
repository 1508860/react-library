import type { DatePickerDisabledRanges } from "../types/date-picker-props-disabled-ranges.type";
import { isDatePickerValueEqual } from "./is-date-picker-value-equal.function";

/**
 * Compare two {@link DatePickerDisabledRanges} collections and check if the date (not including time) is equal and exists in both collections
 * @param value1
 * @param value2
 */
export function isDatePickerDisabledRangesEqual(value1: DatePickerDisabledRanges, value2: DatePickerDisabledRanges): boolean {

	if (value1.length !== value2.length) return false;

	const value1Ordered = value1.sort((a, b) => a.dateFrom > b.dateFrom ? 1 : (a.dateFrom < b.dateFrom ? -1 : 0));
	const value2Ordered = value2.sort((a, b) => a.dateFrom > b.dateFrom ? 1 : (a.dateFrom < b.dateFrom ? -1 : 0));

	return value1Ordered.every((x, i) => (
		isDatePickerValueEqual(x.dateFrom, value2Ordered[i].dateFrom) &&
		isDatePickerValueEqual(x.dateTo, value2Ordered[i].dateTo)
	));
}
