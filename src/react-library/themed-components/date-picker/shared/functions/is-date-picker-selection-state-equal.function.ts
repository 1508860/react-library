import type { DatePickerSelectionState } from "../types/date-picker-selection-state.type";

/**
 * Compare two objects of type {@link DatePickerSelectionState} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isDatePickerSelectionStateEqual(value1: DatePickerSelectionState, value2: DatePickerSelectionState): boolean {
	return (
		value1.month === value2.month &&
		value1.year === value2.year
	);
}
