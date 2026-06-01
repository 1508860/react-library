import { useCallback } from "react";

import {
	type Callback,
	useResolveState,
	Orientation
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
	DatePickerSelectionMenuItem,
	isDatePickerSelectionMenuItemPropsEqual,
	type DatePickerSelectionMenuItemProps
} from "../selection-menu-item";

import { datePickerSelectionMenuYearsResolverStyle } from "./styles/date-picker-selection-menu-years-resolver-style.function";
import type { DatePickerSelectionMenuYearsResolverProps } from "./types/date-picker-selection-menu-years-resolver-props.type";

/**
 * Date picker selection menu years resolver
 */
export function DatePickerSelectionMenuYearsResolver(props: DatePickerSelectionMenuYearsResolverProps) {

	// Local contexts
	const colourState = useDatePickerColourStateContext();
	const selectionChangeSubject = useDatePickerSelectionChangeSubjectContext();
	const virtualScrollColourState = useDatePickerVirtualScrollColourState();
	const years = useDatePickerYearsContext();

	// Resolve items
	const resolveItems = useCallback<Callback<VirtualScrollItems<DatePickerSelectionMenuItemProps>>>(
		() => years.map<VirtualScrollItem<DatePickerSelectionMenuItemProps>>(year => ({
			childProps: {
				isActive: props.selectionState.year === year,
				label: year,
				onClick: () => {
					props.onClick();
					selectionChangeSubject.notify(
						resolveDatePickerSelectionStateToIndex(
							{
								month: props.selectionState.month,
								year: year
							},
							years
						)
					);
				}
			},
			children: DatePickerSelectionMenuItem,
			id: year,
			size: DATE_PICKER_PROPERTY_MAP.selectionMenu.itemHeight
		})),
		[props, selectionChangeSubject, years]
	);
	const items = useResolveState(resolveItems);

	return (
		<div style={datePickerSelectionMenuYearsResolverStyle(colourState)}>
			<HoverLayerColourProvider colour={colourState.selectionMenu.hover}>
				<ThemedVirtualScroll<DatePickerSelectionMenuItemProps>
					colour={virtualScrollColourState}
					isEqual={isDatePickerSelectionMenuItemPropsEqual}
					itemBufferCount={DATE_PICKER_VIRTUAL_SCROLL_ITEM_BUFFER_COUNT}
					items={items}
					itemSize={DATE_PICKER_PROPERTY_MAP.selectionMenu.itemHeight}
					orientation={Orientation.Vertical}
				/>
			</HoverLayerColourProvider>
		</div>
	);
}
