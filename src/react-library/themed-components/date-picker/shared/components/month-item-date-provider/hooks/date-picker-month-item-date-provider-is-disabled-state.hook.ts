import { useCallback } from "react";

import {
	DateWeekday,
	useResolveState,
	type Callback
} from "@react-library/common";

import { isDatePickerValueEqual } from "../../../functions/is-date-picker-value-equal.function";
import { isDatePickerValueGreaterThan } from "../../../functions/is-date-picker-value-greater-than.function";
import { isDatePickerValueLessThan } from "../../../functions/is-date-picker-value-less-than.function";
import { useDatePickerScopeContext } from "../../../hooks/date-picker-scope-context.hook";
import type { DatePickerValue } from "../../../types/date-picker-props-value.type";

/**
 * Custom hook to resolve if the date is disabled or not
 * @param monthItemDateValue
 * @param weekday
 */
export function useDatePickerMonthItemDateProviderIsDisabledState(monthItemDateValue: DatePickerValue, weekday: DateWeekday): boolean {

	// Local contexts
	const scope = useDatePickerScopeContext();

	const resolveState = useCallback<Callback<boolean>>(
		() => {
			// Bounds
			if (
				isDatePickerValueGreaterThan(monthItemDateValue, scope.dateTo, false) ||
				isDatePickerValueLessThan(monthItemDateValue, scope.dateFrom, false)
			) return true;

			// Dates
			if (scope.disabledDates?.some(x => isDatePickerValueEqual(monthItemDateValue, x))) return true;

			// Months
			if (scope.disabledMonths && scope.disabledMonths.includes(monthItemDateValue.month)) return true;

			// Ranges
			if (
				!!scope.disabledRanges &&
				scope.disabledRanges.every(x => (
					isDatePickerValueGreaterThan(monthItemDateValue, x.dateFrom, true) &&
					isDatePickerValueLessThan(monthItemDateValue, x.dateTo, true)
				))
			) return true;

			// Weekdays
			if (scope.disabledWeekdays && scope.disabledWeekdays.includes(weekday)) return true;

			return false;
		},
		[monthItemDateValue, weekday, scope.dateFrom, scope.dateTo, scope.disabledDates, scope.disabledMonths, scope.disabledRanges, scope.disabledWeekdays]
	);
	const state = useResolveState(resolveState);

	return state;
};
