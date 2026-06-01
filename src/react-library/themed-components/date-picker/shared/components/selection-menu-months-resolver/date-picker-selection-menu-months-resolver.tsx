import { useCallback } from "react";

import {
	type Callback,
	useResolveState,
	Orientation,
	DATE_MONTH_ALL
} from "@react-library/common";
import {
	HoverLayerColourProvider,
	type VirtualScrollItem,
	type VirtualScrollItems
} from "@react-library/components";

import { ThemedVirtualScroll } from "../../../../shared";

import { DATE_PICKER_PROPERTY_MAP } from "../../constants/date-picker-property-map.const";
import { DATE_PICKER_VIRTUAL_SCROLL_ITEM_BUFFER_COUNT } from "../../constants/date-picker-virtual-scroll.const";
import { resolveDatePickerSelectionStateToIndex } from "../../functions/resolve-date-picker-select-state-index.function";
import { useDatePickerColourStateContext } from "../../hooks/date-picker-colour-state-context.hook";
import { useDatePickerSelectionChangeSubjectContext } from "../../hooks/date-picker-selection-change-subject-context.hook";
import { useDatePickerVirtualScrollColourState } from "../../hooks/use-date-picker-virtual-scroll-colour-state.hook";
import { useDatePickerYearsContext } from "../../hooks/date-picker-years-context.hook";

import {
	DatePickerSelectionMenuMonthsResolverItem,
	isDatePickerSelectionMenuMonthsResolverItemPropsEqual,
	type DatePickerSelectionMenuMonthsResolverItemProps
} from "./components/item";
import { datePickerSelectionMenuMonthResolverStyle } from "./styles/date-picker-selection-menu-months-resolver-style.function";
import type { DatePickerSelectionMenuMonthsResolverProps } from "./types/date-picker-selection-menu-months-resolver-props.type";

/**
 * Date picker selection menu months resolver
 */
export function DatePickerSelectionMenuMonthsResolver(props: DatePickerSelectionMenuMonthsResolverProps) {

	// Local contexts
	const colourState = useDatePickerColourStateContext();
	const selectionChangeSubject = useDatePickerSelectionChangeSubjectContext();
	const virtualScrollColourState = useDatePickerVirtualScrollColourState();
	const years = useDatePickerYearsContext();

	// Resolve items
	const resolveItems = useCallback<Callback<VirtualScrollItems<DatePickerSelectionMenuMonthsResolverItemProps>>>(
		() => DATE_MONTH_ALL.map<VirtualScrollItem<DatePickerSelectionMenuMonthsResolverItemProps>>(month => ({
			childProps: {
				isActive: props.selectionState.month === month,
				month: month,
				onClick: () => {
					props.onClick();
					selectionChangeSubject.notify(
						resolveDatePickerSelectionStateToIndex(
							{
								month: month,
								year: props.selectionState.year
							},
							years
						)
					);
				}
			},
			children: DatePickerSelectionMenuMonthsResolverItem,
			id: month,
			size: DATE_PICKER_PROPERTY_MAP.selectionMenu.itemHeight
		})),
		[props, selectionChangeSubject, years]
	);
	const items = useResolveState(resolveItems);

	return (
		<div style={datePickerSelectionMenuMonthResolverStyle(colourState)}>
			<HoverLayerColourProvider colour={colourState.selectionMenu.hover}>
				<ThemedVirtualScroll<DatePickerSelectionMenuMonthsResolverItemProps>
					colour={virtualScrollColourState}
					isEqual={isDatePickerSelectionMenuMonthsResolverItemPropsEqual}
					itemBufferCount={DATE_PICKER_VIRTUAL_SCROLL_ITEM_BUFFER_COUNT}
					items={items}
					itemSize={DATE_PICKER_PROPERTY_MAP.selectionMenu.itemHeight}
					orientation={Orientation.Vertical}
				/>
			</HoverLayerColourProvider>
		</div>
	);
}
