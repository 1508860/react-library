import { useCallback, useState } from "react";

import { toDateMonth, useResolveState, type Callback } from "@react-library/common";

import { DATE_PICKER_COLOUR_STATE_CONTEXT } from "../../constants/date-picker-colour-state-context.const";
import { DATE_PICKER_ON_VALUE_CHANGE_CONTEXT } from "../../constants/date-picker-on-value-change-context.const";
import { DATE_PICKER_SCOPE_CONTEXT } from "../../constants/date-picker-scope-context.const";
import { DATE_PICKER_VALUE_CONTEXT } from "../../constants/date-picker-value-context.const";
import { DATE_PICKER_VALUE_TODAY_CONTEXT } from "../../constants/date-picker-value-today-context.const";
import { DATE_PICKER_YEARS_CONTEXT } from "../../constants/date-picker-years-context.const";
import { isDatePickerScopeEqual } from "../../functions/is-date-picker-scope-equal.function";
import { isDatePickerYearsEqual } from "../../functions/is-date-picker-years-equal.function";
import type { DatePickerValue } from "../../types/date-picker-props-value.type";
import type { DatePickerScope } from "../../types/date-picker-scope.type";
import type { DatePickerYears } from "../../types/date-picker-years.type";

import { useDatePickerProviderColourState } from "./hooks/date-picker-provider-colour-state.hook";
import type { DatePickerProviderProps } from "./types/date-picker-provider-props.type";

/**
 * Date picker provider
 */
export function DatePickerProvider(props: DatePickerProviderProps) {

	// Colour state
	const colourState = useDatePickerProviderColourState();

	// Scopes
	const resolveScope = useCallback<Callback<DatePickerScope>>(
		() => ({
			dateFrom: props.dateFrom,
			dateTo: props.dateTo,
			disabledDates: props.disabledDates,
			disabledMonths: props.disabledMonths,
			disabledRanges: props.disabledRanges,
			disabledWeekdays: props.disabledWeekdays
		}),
		[props.dateFrom, props.dateTo, props.disabledDates, props.disabledMonths, props.disabledRanges, props.disabledWeekdays]
	);
	const scope = useResolveState(resolveScope, isDatePickerScopeEqual);

	// Years
	const resolveYears = useCallback<Callback<DatePickerYears>>(
		() => {
			const yearFrom = props.dateFrom.year;
			const yearTo = props.dateTo.year;
			if (yearFrom > yearTo) return [];
			return Array.from({ length: yearTo - yearFrom + 1 }, (_, i) => i + yearFrom);
		},
		[props.dateFrom, props.dateTo]
	);
	const years = useResolveState(resolveYears, isDatePickerYearsEqual);

	// Value for today's date
	const [valueToday] = useState<DatePickerValue>(() => {
		const dateToday = new Date();
		return {
			day: dateToday.getUTCDate(),
			month: toDateMonth(dateToday.getUTCMonth()),
			year: dateToday.getUTCFullYear()
		};
	});

	return (
		<DATE_PICKER_COLOUR_STATE_CONTEXT value={colourState}>
			<DATE_PICKER_ON_VALUE_CHANGE_CONTEXT value={props.onValueChange}>
				<DATE_PICKER_SCOPE_CONTEXT value={scope}>
					<DATE_PICKER_VALUE_CONTEXT value={props.value}>
						<DATE_PICKER_VALUE_TODAY_CONTEXT value={valueToday}>
							<DATE_PICKER_YEARS_CONTEXT value={years}>
								{props.children}
							</DATE_PICKER_YEARS_CONTEXT>
						</DATE_PICKER_VALUE_TODAY_CONTEXT>
					</DATE_PICKER_VALUE_CONTEXT>
				</DATE_PICKER_SCOPE_CONTEXT>
			</DATE_PICKER_ON_VALUE_CHANGE_CONTEXT>
		</DATE_PICKER_COLOUR_STATE_CONTEXT>
	);
}
