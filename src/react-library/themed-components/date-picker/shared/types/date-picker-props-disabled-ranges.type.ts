import type { IDateFrom, IDateTo, IDisabledRanges } from "@react-library/common";

import type { DatePickerValue } from "./date-picker-props-value.type";

/**
 * Props for the date picker disabled ranges state
 */
export type DatePickerPropsDisabledRanges = (
	Partial<IDisabledRanges<DatePickerDisabledRanges>>
);

/**
 * Date picker disabled ranges type
 */
export type DatePickerDisabledRanges = Array<DatePickerDisabledRange>;

/**
 * Date picker disabled range type
 */
export type DatePickerDisabledRange = (
	IDateFrom<DatePickerValue> &
	IDateTo<DatePickerValue>
);
