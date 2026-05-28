import type { DatePickerScope } from "../types/date-picker-scope.type";

import { isDatePickerDisabledRangesEqual } from "./is-date-picker-disabled-ranges-equal.function";
import { isDatePickerValueEqual } from "./is-date-picker-value-equal.function";

/**
 * Compare two objects of type {@link DatePickerScope} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isDatePickerScopeEqual(value1: DatePickerScope, value2: DatePickerScope): boolean {
	return (
		isDatePickerValueEqual(value1.dateFrom, value2.dateFrom) &&
		isDatePickerValueEqual(value1.dateTo, value2.dateTo) &&
		(
			(
				value1.disabledDates === undefined &&
				value2.disabledDates === undefined
			) ||
			(
				!!value1.disabledDates &&
				!!value2.disabledDates &&
				value1.disabledDates.length === value2.disabledDates.length &&
				value1.disabledDates.some((x, i) => isDatePickerValueEqual(x, value2.disabledDates?.[i]))
			)
		) &&
		(
			(
				value1.disabledMonths === undefined &&
				value2.disabledMonths === undefined
			) ||
			(
				!!value1.disabledMonths?.every(x => !!value2.disabledMonths?.includes(x))
			)
		) &&
		(
			(
				value1.disabledRanges === undefined &&
				value2.disabledRanges === undefined
			) ||
			(
				!!value1.disabledRanges &&
				!!value2.disabledRanges &&
				isDatePickerDisabledRangesEqual(value1.disabledRanges, value2.disabledRanges)
			)
		) &&
		(
			(
				value1.disabledWeekdays === undefined &&
				value2.disabledWeekdays === undefined
			) ||
			(
				!!value1.disabledWeekdays?.every(x => !!value2.disabledWeekdays?.includes(x))
			)
		)
	);
}
