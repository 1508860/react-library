import type { DatePickerPropsBounds } from "./date-picker-props-bounds.type";
import type { DatePickerPropsDisabledDates } from "./date-picker-props-disabled-dates.type";
import type { DatePickerPropsDisabledMonths } from "./date-picker-props-disabled-months.type";
import type { DatePickerPropsDisabledRanges } from "./date-picker-props-disabled-ranges.type";
import type { DatePickerPropsDisabledWeekdays } from "./date-picker-props-disabled-weekdays.type";

/**
 * Describes the date picker scope. Information that is required to determine what dates can be selected
 */
export type DatePickerScope = (
	DatePickerPropsBounds &
	DatePickerPropsDisabledDates &
	DatePickerPropsDisabledMonths &
	DatePickerPropsDisabledRanges &
	DatePickerPropsDisabledWeekdays
);
