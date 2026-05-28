import type {
	ArrayFixedLength7,
	ArrayMaxLength7,
	ArrayMinLength1
} from "../../types";

import type { DateWeekday } from "../enums/date-weekday.type";

/**
 * Type for an array of weekdays
 */
export type DateWeekdays = ArrayFixedLength7<DateWeekday>;

/**
 * Type for an array of weekdays up to the maximum length (1-7)
 */
export type DateWeekdaysRange = (
	ArrayMinLength1<DateWeekday> &
	ArrayMaxLength7<DateWeekday>
);
