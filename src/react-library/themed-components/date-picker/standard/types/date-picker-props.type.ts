import type { DatePickerPropsBounds } from "../../shared/types/date-picker-props-bounds.type";
import type { DatePickerPropsDisabledDates } from "../../shared/types/date-picker-props-disabled-dates.type";
import type { DatePickerPropsDisabledMonths } from "../../shared/types/date-picker-props-disabled-months.type";
import type { DatePickerPropsDisabledRanges } from "../../shared/types/date-picker-props-disabled-ranges.type";
import type { DatePickerPropsDisabledWeekdays } from "../../shared/types/date-picker-props-disabled-weekdays.type";
import type { DatePickerPropsOnValueChange } from "../../shared/types/date-picker-props-on-value-change.type";
import type { DatePickerPropsValue } from "../../shared/types/date-picker-props-value.type";

/**
 * Props for the date picker component
 */
export type DatePickerProps = (
	DatePickerPropsBounds &
	DatePickerPropsDisabledDates &
	DatePickerPropsDisabledMonths &
	DatePickerPropsDisabledRanges &
	DatePickerPropsDisabledWeekdays &
	DatePickerPropsOnValueChange &
	DatePickerPropsValue
);
