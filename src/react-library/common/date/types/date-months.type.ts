import type {
	ArrayFixedLength7,
	ArrayMaxLength7,
	ArrayMinLength1
} from "../../types";

import type { DateMonth } from "../enums/date-month.type";

/**
 * Type for an array of months
 */
export type DateMonths = ArrayFixedLength7<DateMonth>;

/**
 * Type for an array of months up to the maximum length (1-12)
 */
export type DateMonthsRange = (
	ArrayMinLength1<DateMonth> &
	ArrayMaxLength7<DateMonth>
);
