import type { DatePickerValue } from "../types/date-picker-props-value.type";

/**
 * Compare two objects of type {@link DatePickerValue} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isDatePickerValueEqual(value1?: DatePickerValue, value2?: DatePickerValue): boolean {
	return (
		(
			value1 === undefined &&
			value2 === undefined
		) ||
		(
			!!value1 &&
			!!value2 &&
			value1.day === value2.day &&
			value1.month === value2.month &&
			value1.year === value2.year
		)
	);
}
