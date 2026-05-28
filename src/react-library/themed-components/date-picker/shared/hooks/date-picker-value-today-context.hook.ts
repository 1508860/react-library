import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { DATE_PICKER_VALUE_TODAY_CONTEXT } from "../constants/date-picker-value-today-context.const";
import type { DatePickerValue } from "../types/date-picker-props-value.type";

/**
 * Returns context for {@link DATE_PICKER_VALUE_TODAY_CONTEXT} and ensures a non-null value
 */
export function useDatePickerValueTodayContext(): DatePickerValue {
	const result = useContext(DATE_PICKER_VALUE_TODAY_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
