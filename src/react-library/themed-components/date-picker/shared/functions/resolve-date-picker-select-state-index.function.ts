import { DATE_MONTH_ALL, DateMonth, toDateMonth } from "@react-library/common";

import type { DatePickerSelectionState } from "../types/date-picker-selection-state.type";
import type { DatePickerYears } from "../types/date-picker-years.type";

/**
 * Resolve a date picker selection state index for month items
 * @param selectionState
 * @param years
 */
export function resolveDatePickerSelectionStateToIndex(selectionState: DatePickerSelectionState, years: DatePickerYears): number {
	return (
		(
			years.findIndex(x => x === selectionState.year) *
			DATE_MONTH_ALL.length
		) +
		selectionState.month
	);
}

/**
 * Resolve a date picker index from a selection state for month items
 * @param index
 * @param years
 */
export function resolveDatePickerIndexToSelectionState(index: number, years: DatePickerYears): DatePickerSelectionState {
	const monthIndex: DateMonth = toDateMonth(index % DATE_MONTH_ALL.length);
	const yearIndex: number = ((index - monthIndex) / DATE_MONTH_ALL.length);
	return {
		month: monthIndex,
		year: years[yearIndex]
	};
}
