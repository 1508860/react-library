import type { IValue } from "@react-library/common";

import type { DatePickerPropsDay } from "./date-picker-props-day.type";
import type { DatePickerPropsMonth } from "./date-picker-props-month.type";
import type { DatePickerPropsYear } from "./date-picker-props-year.type";

/**
 * Props for the date picker value
 */
export type DatePickerPropsValue = (
	IValue<DatePickerValue | undefined>
);

/**
 * Date picker value for the currently selected date
 */
export type DatePickerValue = (
	DatePickerPropsDay &
	DatePickerPropsMonth &
	DatePickerPropsYear
);
