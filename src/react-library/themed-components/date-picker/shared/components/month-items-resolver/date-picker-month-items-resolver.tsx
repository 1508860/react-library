import { useCallback } from "react";

import {
	type Callback,
	useResolveState,
	Orientation,
	DATE_MONTH_ALL,
	dateWeeksInMonth
} from "@react-library/common";
import type { VirtualScrollItems } from "@react-library/components";

import { ThemedVirtualScroll } from "../../../../shared";

import { DATE_PICKER_VIRTUAL_SCROLL_ITEM_BUFFER_COUNT } from "../../constants/date-picker-virtual-scroll.const";
import {
	resolveDatePickerMonthItemHeight,
	resolveDatePickerMonthItemId
} from "../../functions/resolve-date-picker-month-item.function";
import { useDatePickerYearsContext } from "../../hooks/date-picker-years-context.hook";
import { useDatePickerVirtualScrollColourState } from "../../hooks/use-date-picker-virtual-scroll-colour-state.hook";

import {
	DatePickerMonthItem,
	isDatePickerMonthItemPropsEqual,
	type DatePickerMonthItemProps
} from "../month-item";
import { DATE_PICKER_PROPERTY_MAP } from "../../constants/date-picker-property-map.const";

/**
 * Date picker month items resolver
 */
export function DatePickerMonthItemsResolver() {

	// Local contexts
	const years = useDatePickerYearsContext();

	// Virtual scroll colour
	const virtualScrollColourState = useDatePickerVirtualScrollColourState();

	// Resolve items
	const resolveItems = useCallback<Callback<VirtualScrollItems<DatePickerMonthItemProps>>>(
		() => {
			const result: VirtualScrollItems<DatePickerMonthItemProps> = [];
			years.forEach(year => {
				DATE_MONTH_ALL.forEach(month => {

					const firstDate: Date = new Date(Date.UTC(year, month, 1));
					const weekCount: number = dateWeeksInMonth(firstDate);

					result.push({
						childProps: {
							firstDate: firstDate,
							month: month,
							weekCount: weekCount,
							year: year
						},
						children: DatePickerMonthItem,
						id: resolveDatePickerMonthItemId(year, month),
						size: resolveDatePickerMonthItemHeight(weekCount)
					});
				});
			});
			return result;
		},
		[years]
	);
	const items = useResolveState(resolveItems);

	return (
		<ThemedVirtualScroll
			colour={virtualScrollColourState}
			contentWidth={DATE_PICKER_PROPERTY_MAP.monthItem.width}
			isEqual={isDatePickerMonthItemPropsEqual}
			itemBufferCount={DATE_PICKER_VIRTUAL_SCROLL_ITEM_BUFFER_COUNT}
			items={items}
			itemSize={0}
			orientation={Orientation.Vertical}
		/>
	);
}
