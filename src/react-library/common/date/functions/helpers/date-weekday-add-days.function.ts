import { DateWeekday } from "../../enums/date-weekday.type";

import { toDateWeekday } from "./to-date-weekday.function";

/**
 * Function to add a number of days to a {@link DateWeekday}
 * - A negative value subtracts days
 * @param dateWeekday
 * @param days
 */
export function dateWeekdayAddDays(dateWeekday: DateWeekday, days: number): DateWeekday {
	const addDays = ((dateWeekday + 1) + days) % 7;
	const newDateWeekday = addDays <= 0 ? (7 + addDays - 1) : (addDays - 1);
	return toDateWeekday(newDateWeekday);
}
