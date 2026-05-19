import { DateWeekday } from "../enums/date-weekday.type";
import { dateAddDays } from "../functions/helpers/date-add-days.function";
import { resolveSundayCurrentWeek } from "../functions/helpers/resolve-sunday-current-week.function";

const SUNDAY_CURRENT_WEEK: Date = resolveSundayCurrentWeek();

/**
 * Map for {@link DateWeekday} dates to be formatted
 */
export const DateWeekdayMap = {
	[DateWeekday.Sunday]: new Date(SUNDAY_CURRENT_WEEK),
	[DateWeekday.Monday]: dateAddDays(new Date(SUNDAY_CURRENT_WEEK), DateWeekday.Monday),
	[DateWeekday.Tuesday]: dateAddDays(new Date(SUNDAY_CURRENT_WEEK), DateWeekday.Tuesday),
	[DateWeekday.Wednesday]: dateAddDays(new Date(SUNDAY_CURRENT_WEEK), DateWeekday.Wednesday),
	[DateWeekday.Thursday]: dateAddDays(new Date(SUNDAY_CURRENT_WEEK), DateWeekday.Thursday),
	[DateWeekday.Friday]: dateAddDays(new Date(SUNDAY_CURRENT_WEEK), DateWeekday.Friday),
	[DateWeekday.Saturday]: dateAddDays(new Date(SUNDAY_CURRENT_WEEK), DateWeekday.Saturday)
} as const satisfies Record<DateWeekday, Date>;
