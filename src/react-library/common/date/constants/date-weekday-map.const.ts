import { DateMonth } from "../enums/date-month.type";
import { DateWeekday } from "../enums/date-weekday.type";
import { dateAddDays } from "../functions/helpers/date-add-days.function";

/**
 * First of the month is a Sunday
 */
const SUNDAY: Date = new Date(Date.UTC(2026, DateMonth.February, 1));

/**
 * Map for {@link DateWeekday} dates to be formatted
 */
export const DateWeekdayMap = {
	[DateWeekday.Sunday]: new Date(SUNDAY),
	[DateWeekday.Monday]: dateAddDays(new Date(SUNDAY), DateWeekday.Monday),
	[DateWeekday.Tuesday]: dateAddDays(new Date(SUNDAY), DateWeekday.Tuesday),
	[DateWeekday.Wednesday]: dateAddDays(new Date(SUNDAY), DateWeekday.Wednesday),
	[DateWeekday.Thursday]: dateAddDays(new Date(SUNDAY), DateWeekday.Thursday),
	[DateWeekday.Friday]: dateAddDays(new Date(SUNDAY), DateWeekday.Friday),
	[DateWeekday.Saturday]: dateAddDays(new Date(SUNDAY), DateWeekday.Saturday)
} as const satisfies Record<DateWeekday, Date>;
