import type { IFirstDate, IWeekCount } from "@react-library/common";

import type { DatePickerPropsMonth } from "../../../types/date-picker-props-month.type";
import type { DatePickerPropsYear } from "../../../types/date-picker-props-year.type";

/**
 * Props for the date picker month item
 */
export type DatePickerMonthItemProps = (
	DatePickerPropsMonth &
	DatePickerPropsYear &
	IFirstDate<Date> &
	IWeekCount<number>
);
