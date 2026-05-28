import type { DatePickerValue } from "../types/date-picker-props-value.type";

/**
 * Compare two objects of type {@link DatePickerValue} and check if on is greater than the other
 * @param value
 * @param greaterThanValue
 * @param allowEqualTo
 */
export function isDatePickerValueGreaterThan(value: DatePickerValue, greaterThanValue: DatePickerValue, allowEqualTo: boolean): boolean {
	return (
		value.year > greaterThanValue.year ||
		(
			value.year === greaterThanValue.year &&
			value.month > greaterThanValue.month
		) ||
		(
			value.year === greaterThanValue.year &&
			value.month === greaterThanValue.month &&
			(
				value.day > greaterThanValue.day ||
				(allowEqualTo && value.day === greaterThanValue.day)
			)
		)
	);
}
