import { MonthInvalidError } from "../../../errors";

import { DateMonth } from "../../enums/date-month.type";

/**
 * Function to map a date month number to a {@link DateMonth}
 * @param month
 */
export function toDateMonth(month: number): DateMonth {
	switch (month) {
		case DateMonth.January: return month;
		case DateMonth.February: return month;
		case DateMonth.March: return month;
		case DateMonth.April: return month;
		case DateMonth.May: return month;
		case DateMonth.June: return month;
		case DateMonth.July: return month;
		case DateMonth.August: return month;
		case DateMonth.September: return month;
		case DateMonth.October: return month;
		case DateMonth.November: return month;
		case DateMonth.December: return month;
		default: throw new MonthInvalidError();
	}
}
