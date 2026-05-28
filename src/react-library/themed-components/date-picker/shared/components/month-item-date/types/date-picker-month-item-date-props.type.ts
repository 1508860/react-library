import type { PropsWithChildren } from "react";

import type { DatePickerPropsDay } from "../../../types/date-picker-props-day.type";
import type { DatePickerPropsMonth } from "../../../types/date-picker-props-month.type";
import type { DatePickerPropsYear } from "../../../types/date-picker-props-year.type";

/**
 * Props for the date picker month item date
 */
export type DatePickerMonthItemDateProps = (
	DatePickerPropsDay &
	DatePickerPropsMonth &
	DatePickerPropsYear &
	PropsWithChildren
);
