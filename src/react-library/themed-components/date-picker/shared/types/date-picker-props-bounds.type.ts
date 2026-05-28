import type { IDateFrom, IDateTo } from "@react-library/common";

import type { DatePickerValue } from "./date-picker-props-value.type";

/**
 * Props for the date picker boundaries to dictate the range of dates that can be picked from
 */
export type DatePickerPropsBounds = (
	IDateFrom<DatePickerValue> &
	IDateTo<DatePickerValue>
);
