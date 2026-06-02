import { WeekdayInvalidError } from "../../../errors";

import { DateWeekday } from "../../enums/date-weekday.type";

/**
 * Function to map a date weekday number to a {@link DateWeekday}
 * @param day
 */
export function toDateWeekday(day: number): DateWeekday {
	switch (day) {
		case DateWeekday.Sunday: return day;
		case DateWeekday.Monday: return day;
		case DateWeekday.Tuesday: return day;
		case DateWeekday.Wednesday: return day;
		case DateWeekday.Thursday: return day;
		case DateWeekday.Friday: return day;
		case DateWeekday.Saturday: return day;
		default: throw new WeekdayInvalidError();
	}
}
