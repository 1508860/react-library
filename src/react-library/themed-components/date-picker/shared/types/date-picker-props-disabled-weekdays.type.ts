import type { DateWeekdaysRange, IDisabledWeekdays } from "@react-library/common";

/**
 * Props for the date picker disabled weekdays state
 */
export type DatePickerPropsDisabledWeekdays = (
	Partial<IDisabledWeekdays<DateWeekdaysRange>>
);
