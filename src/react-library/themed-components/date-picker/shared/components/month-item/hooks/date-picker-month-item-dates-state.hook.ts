import { useCallback } from "react";

import {
	DATE_WEEKDAY_ALL,
	dateAddDays,
	dateAddMonths,
	toDateWeekday,
	useResolveState,
	type Callback
} from "@react-library/common";

import type {
	DatePickerMonthItemDateState,
	DatePickerMonthItemWeekState
} from "../types/date-picker-month-item-date-state.type";

/**
 * Custom hook to resolve days of the month for a month's first date and week count
 * - The result includes full weeks so days at the start and end of the array may be missing a day number AND will be used for placeholder content
 * @param firstDate
 * @param weekCount
 */
export function useDatePickerMonthItemDatesState(firstDate: Date, weekCount: number): Array<DatePickerMonthItemWeekState> {

	const resolveState = useCallback<Callback<Array<DatePickerMonthItemWeekState>>>(
		() => {

			const result: Array<DatePickerMonthItemWeekState> = [];

			let currentDay = firstDate.getUTCDate();

			const firstWeekday = toDateWeekday(firstDate.getUTCDay());

			const lastDate: Date = dateAddDays(dateAddMonths(new Date(firstDate), 1), -1);
			const lastWeekday = toDateWeekday(lastDate.getUTCDay());

			for (let weekNumber: number = 1; weekNumber <= weekCount; weekNumber++) {

				const dates: Array<DatePickerMonthItemDateState> = [];

				DATE_WEEKDAY_ALL.forEach(weekday => {
					if (
						(weekNumber === 1 && weekday < firstWeekday) ||
						(weekNumber === weekCount && weekday > lastWeekday)
					) dates.push({ weekday: weekday });
					else {
						dates.push({ day: currentDay, weekday: weekday });
						currentDay++;
					}
				});

				result.push({
					dates: dates,
					weekNumber: weekNumber
				});
			}

			return result;
		},
		[firstDate, weekCount]
	);
	const state = useResolveState(resolveState);

	return state;
};
