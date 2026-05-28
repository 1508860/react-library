import type { CallbackWithParameter, IOnValueChange } from "@react-library/common";

import type { DatePickerValue } from "./date-picker-props-value.type";

/**
 * Props for the date picker on value change callback
 */
export type DatePickerPropsOnValueChange = (
	IOnValueChange<DatePickerOnValueChange>
);

/**
 * Date picker on value change callback
 */
export type DatePickerOnValueChange = CallbackWithParameter<(DatePickerValue | undefined), void>;
