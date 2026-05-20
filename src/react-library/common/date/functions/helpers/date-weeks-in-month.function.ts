import { DateWeekday } from "../../enums/date-weekday.type";

import { dateAddDays } from "./date-add-days.function";
import { dateAddMonths } from "./date-add-months.function";
import { dateWeekdayAddDays } from "./date-weekday-add-days.function";
import { toDateWeekday } from "./to-date-weekday.function";

/**
 * Function to count the number of weeks in the month of a {@link Date}
 * @param date
 */
export function dateWeeksInMonth(date: Date): number {
	let result: number = 0;

	const firstDate: Date = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
	const lastDate: Date = dateAddDays(dateAddMonths(new Date(firstDate), 1), -1);

	const dayFrom: DateWeekday = toDateWeekday(firstDate.getUTCDay());
	const lastDayOfMonth: number = lastDate.getUTCDate();

	let currentDay: DateWeekday = dayFrom;

	// Add 1 for partial first week
	if (currentDay !== DateWeekday.Sunday) result++;

	for (let dayOfMonth = 1; dayOfMonth <= lastDayOfMonth; dayOfMonth++) {
		if (currentDay === DateWeekday.Sunday) result++;
		currentDay = dateWeekdayAddDays(currentDay, 1);
	}

	return result;
}
