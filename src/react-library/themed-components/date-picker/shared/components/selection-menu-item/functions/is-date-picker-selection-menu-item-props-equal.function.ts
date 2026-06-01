import type { DatePickerSelectionMenuItemProps } from "../types/date-picker-selection-menu-item-props.type";

/**
 * Compare two objects of type {@link DatePickerSelectionMenuItemProps} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isDatePickerSelectionMenuItemPropsEqual(value1: DatePickerSelectionMenuItemProps, value2: DatePickerSelectionMenuItemProps): boolean {
	return (
		value1.isActive === value2.isActive &&
		value1.label === value2.label &&
		value1.onClick === value2.onClick
	)
}
