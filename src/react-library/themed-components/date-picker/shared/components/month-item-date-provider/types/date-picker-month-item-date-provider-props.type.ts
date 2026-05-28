import type { PropsWithChildren } from "react";

import type { DatePickerPropsDay } from "../../../types/date-picker-props-day.type";
import type { DatePickerPropsMonth } from "../../../types/date-picker-props-month.type";
import type { DatePickerPropsWeekday } from "../../../types/date-picker-props-weekday.type";
import type { DatePickerPropsYear } from "../../../types/date-picker-props-year.type";

/**
 * Date picker month item date provider props
 */
export type DatePickerMonthItemDateProviderProps = (
	DatePickerPropsDay &
	DatePickerPropsMonth &
	DatePickerPropsWeekday &
	DatePickerPropsYear &
	PropsWithChildren
);
