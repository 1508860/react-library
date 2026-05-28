import { isDateEqual } from "@react-library/common";

import type { DatePickerMonthItemProps } from "../types/date-picker-month-item-props.type";

/**
 * Compare two {@link DatePickerMonthItemProps} collections and check if the date (not including time) is equal and exists in both collections
 * @param value1
 * @param value2
 */
export function isDatePickerMonthItemPropsEqual(value1: DatePickerMonthItemProps, value2: DatePickerMonthItemProps): boolean {
	return (
		isDateEqual(value1.firstDate, value2.firstDate) &&
		value1.month === value2.month &&
		value1.weekCount === value2.weekCount &&
		value1.year === value2.year
	)
}
