import type { IFractionalSecondDigits } from "../../interfaces";

/**
 * Type to define options for formatting date time
 * Note: typing for {@link Intl.DateTimeFormatOptions} is missing fractional second digits so added in here
 */
export type DateTimeDisplayFormatterOptions = (
	Partial<IFractionalSecondDigits<1 | 2 | 3>> &
	Intl.DateTimeFormatOptions
);
