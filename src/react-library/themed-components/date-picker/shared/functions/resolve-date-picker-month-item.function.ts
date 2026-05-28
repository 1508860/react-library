import type { DateMonth, SizePx } from "@react-library/common";

import { DATE_PICKER_PROPERTY_MAP } from "../constants/date-picker-property-map.const";

/**
 * Resolve a date picker month item's id
 * @param year
 * @param month
 */
export function resolveDatePickerMonthItemId(year: number, month: DateMonth): string {
	return `${year}-${month}`;
}

/**
 * Resolve a date picker month item's height
 * @param weekCount
 */
export function resolveDatePickerMonthItemHeight(weekCount: number): SizePx {
	return (
		(
			weekCount * DATE_PICKER_PROPERTY_MAP.monthItem.date.size
		) +
		(
			DATE_PICKER_PROPERTY_MAP.monthItem.title.height
		) +
		(
			DATE_PICKER_PROPERTY_MAP.monthItem.weekday.height +
			DATE_PICKER_PROPERTY_MAP.monthItem.weekday.marginBottom
		)
	)
}
