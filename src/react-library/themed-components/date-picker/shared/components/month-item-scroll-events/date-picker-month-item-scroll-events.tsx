import { useCallback, useEffect } from "react";

import { ScalePercent, useObserver, type CallbackWithParameter } from "@react-library/common";
import {
	useVirtualScrollIndexesInViewContext,
	useVirtualScrollToIndexCallbackContext,
	VirtualScrollToIndexBehaviour,
	type VirtualScrollChildren
} from "@react-library/components";

import {
	resolveDatePickerIndexToSelectionState,
	resolveDatePickerSelectionStateToIndex
} from "../../functions/resolve-date-picker-select-state-index.function";
import { useDatePickerSelectionChangeSubjectContext } from "../../hooks/date-picker-selection-change-subject-context.hook";
import { useDatePickerSetSelectionStateCallbackContext } from "../../hooks/date-picker-set-selection-state-callback-context.hook";
import { useDatePickerValueTodayContext } from "../../hooks/date-picker-value-today-context.hook";
import { useDatePickerYearsContext } from "../../hooks/date-picker-years-context.hook";

/**
 * Date picker month item scroll events
 */
export function DatePickerMonthItemScrollEvents(): VirtualScrollChildren {

	// Local contexts
	const selectionChangeSubject = useDatePickerSelectionChangeSubjectContext();
	const setSelectionStateCallback = useDatePickerSetSelectionStateCallbackContext();
	const valueToday = useDatePickerValueTodayContext();
	const years = useDatePickerYearsContext();

	// Virtual scroll contexts
	const virtualScrollIndexesInView = useVirtualScrollIndexesInViewContext();
	const virtualScrollToIndexCallback = useVirtualScrollToIndexCallbackContext();

	// Handle changes from selection change subject

	const handleSelectionChange = useCallback<CallbackWithParameter<number, void>>(
		(index) => virtualScrollToIndexCallback(index, VirtualScrollToIndexBehaviour.Instant),
		[virtualScrollToIndexCallback]
	);

	useObserver(selectionChangeSubject, handleSelectionChange);

	// Handle changes to indexes in virtual scroll
	useEffect(
		() => {
			if (virtualScrollIndexesInView.length === 0) return;

			let primaryItem = virtualScrollIndexesInView[0];

			// Terminate at the fisrt item is fully visible
			if (primaryItem.percentVisible < ScalePercent[100]) {
				for (let index = 1; index < virtualScrollIndexesInView.length; index++) {
					const currentItem = virtualScrollIndexesInView[index];
					if (primaryItem.percentVisible < currentItem.percentVisible) {
						primaryItem = currentItem;
						// Terminate when first fully visible item is found, otherwise, we end up with most visible item
						if (primaryItem.percentVisible >= ScalePercent[100]) break;
					}
				}
			}

			const newSelectionState = resolveDatePickerIndexToSelectionState(primaryItem.index, years);

			setSelectionStateCallback(newSelectionState);
		},
		[setSelectionStateCallback, years, virtualScrollIndexesInView]
	);

	// Handle initial state
	useEffect(
		() => virtualScrollToIndexCallback(resolveDatePickerSelectionStateToIndex(valueToday, years), VirtualScrollToIndexBehaviour.Instant),
		[valueToday, years, virtualScrollToIndexCallback]
	);

	return (null);
}
