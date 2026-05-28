import type { PropsWithChildren } from "react";

import type { DatePickerPropsBounds } from "../../../types/date-picker-props-bounds.type";
import type { DatePickerPropsDisabledDates } from "../../../types/date-picker-props-disabled-dates.type";
import type { DatePickerPropsDisabledMonths } from "../../../types/date-picker-props-disabled-months.type";
import type { DatePickerPropsDisabledRanges } from "../../../types/date-picker-props-disabled-ranges.type";
import type { DatePickerPropsDisabledWeekdays } from "../../../types/date-picker-props-disabled-weekdays.type";
import type { DatePickerPropsOnValueChange } from "../../../types/date-picker-props-on-value-change.type";
import type { DatePickerPropsValue } from "../../../types/date-picker-props-value.type";

/**
 * Date picker provider props
 */
export type DatePickerProviderProps = (
	DatePickerPropsBounds &
	DatePickerPropsDisabledDates &
	DatePickerPropsDisabledMonths &
	DatePickerPropsDisabledRanges &
	DatePickerPropsDisabledWeekdays &
	DatePickerPropsOnValueChange &
	DatePickerPropsValue &
	PropsWithChildren
);
