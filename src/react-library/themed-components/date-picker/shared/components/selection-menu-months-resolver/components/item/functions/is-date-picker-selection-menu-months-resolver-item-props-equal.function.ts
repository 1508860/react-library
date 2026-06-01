import type { DatePickerSelectionMenuMonthsResolverItemProps } from "../types/date-picker-selection-menu-months-resolver-item-props.type";

/**
 * Compare two objects of type {@link DatePickerSelectionMenuMonthsResolverItemProps} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isDatePickerSelectionMenuMonthsResolverItemPropsEqual(
	value1: DatePickerSelectionMenuMonthsResolverItemProps,
	value2: DatePickerSelectionMenuMonthsResolverItemProps
): boolean {
	return (
		value1.isActive === value2.isActive &&
		value1.month === value2.month &&
		value1.onClick === value2.onClick
	)
}
