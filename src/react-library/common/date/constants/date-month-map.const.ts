import { DateMonth } from "../enums/date-month.type";

/**
 * Map for {@link DateMonth} dates to be formatted
 */
export const DateMonthMap = {
	[DateMonth.January]: new Date(1990, DateMonth.January, 1),
	[DateMonth.February]: new Date(1990, DateMonth.February, 1),
	[DateMonth.March]: new Date(1990, DateMonth.March, 1),
	[DateMonth.April]: new Date(1990, DateMonth.April, 1),
	[DateMonth.May]: new Date(1990, DateMonth.May, 1),
	[DateMonth.June]: new Date(1990, DateMonth.June, 1),
	[DateMonth.July]: new Date(1990, DateMonth.July, 1),
	[DateMonth.August]: new Date(1990, DateMonth.August, 1),
	[DateMonth.September]: new Date(1990, DateMonth.September, 1),
	[DateMonth.October]: new Date(1990, DateMonth.October, 1),
	[DateMonth.November]: new Date(1990, DateMonth.November, 1),
	[DateMonth.December]: new Date(1990, DateMonth.December, 1)
} as const satisfies Record<DateMonth, Date>;
