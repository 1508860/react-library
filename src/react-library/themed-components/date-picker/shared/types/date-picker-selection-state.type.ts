import type { DatePickerPropsMonth } from "./date-picker-props-month.type";
import type { DatePickerPropsYear } from "./date-picker-props-year.type";

/**
 * Describes values for date picker component's selection state
 */
export type DatePickerSelectionState = (
	DatePickerPropsMonth &
	DatePickerPropsYear
);
