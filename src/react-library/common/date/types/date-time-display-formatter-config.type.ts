import type {
	IDay,
	ILength,
	IMonth,
	ITimeDisplayStyle,
	IWeekday,
	IYear
} from "../../interfaces";

import type { DateTimeDisplayLength } from "../enums/date-time-display-length.type";
import type { TimeDisplayStyle } from "../enums/time-display-style.type";

/**
 * Type to define the return type of date time hooks
 */
export type DateTimeDisplayFormatterConfig = (
	Partial<IDay<boolean>> &
	ILength<DateTimeDisplayLength> &
	Partial<IMonth<boolean>> &
	Partial<ITimeDisplayStyle<TimeDisplayStyle>> &
	Partial<IWeekday<boolean>> &
	Partial<IYear<boolean>>
);
