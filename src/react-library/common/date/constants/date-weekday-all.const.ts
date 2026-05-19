import type { ArrayFixedLength7 } from "../../types";

import { DateWeekday } from "../enums/date-weekday.type";

/**
 * Full array of {@link DateWeekday}
 */
export const DATE_WEEKDAY_ALL: ArrayFixedLength7<DateWeekday> = [
	DateWeekday.Sunday,
	DateWeekday.Monday,
	DateWeekday.Tuesday,
	DateWeekday.Wednesday,
	DateWeekday.Thursday,
	DateWeekday.Friday,
	DateWeekday.Saturday,
];
