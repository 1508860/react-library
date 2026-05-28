import type { IDates, IWeekNumber } from "@react-library/common";

import type { DatePickerPropsDay } from "../../../types/date-picker-props-day.type";
import type { DatePickerPropsWeekday } from "../../../types/date-picker-props-weekday.type";

/**
 * Props for the date picker month item date state
 */
export type DatePickerMonthItemDateState = (
	Partial<DatePickerPropsDay> &
	DatePickerPropsWeekday
);

/**
 * Props for the date picker month item week state
 */
export type DatePickerMonthItemWeekState = (
	IDates<Array<DatePickerMonthItemDateState>> &
	IWeekNumber<number>
);
