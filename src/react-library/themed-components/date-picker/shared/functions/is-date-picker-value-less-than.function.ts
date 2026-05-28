import type { DatePickerValue } from "../types/date-picker-props-value.type";

/**
 * Compare two objects of type {@link DatePickerValue} and check if on is less than the other
 * @param value
 * @param lessThanValue
 * @param allowEqualTo
 */
export function isDatePickerValueLessThan(value: DatePickerValue, lessThanValue: DatePickerValue, allowEqualTo: boolean): boolean {
	return (
		value.year < lessThanValue.year ||
		(
			value.year === lessThanValue.year &&
			value.month < lessThanValue.month
		) ||
		(
			value.year === lessThanValue.year &&
			value.month === lessThanValue.month &&
			(
				value.day < lessThanValue.day ||
				(allowEqualTo && value.day === lessThanValue.day)
			)
		)
	);
}
