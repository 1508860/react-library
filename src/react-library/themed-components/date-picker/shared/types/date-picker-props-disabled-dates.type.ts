import type { IDisabledDates } from "@react-library/common";

import type { DatePickerValue } from "./date-picker-props-value.type";

/**
 * Props for the date picker disabled dates state
 */
export type DatePickerPropsDisabledDates = (
	Partial<IDisabledDates<DatePickerDisabledDates>>
);

/**
 * Date picker disabled dates type
 */
export type DatePickerDisabledDates = Array<DatePickerValue>;
