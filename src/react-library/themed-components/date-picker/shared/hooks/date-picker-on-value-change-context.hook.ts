import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { DATE_PICKER_ON_VALUE_CHANGE_CONTEXT } from "../constants/date-picker-on-value-change-context.const";
import type { DatePickerOnValueChange } from "../types/date-picker-props-on-value-change.type";

/**
 * Returns context for {@link DATE_PICKER_ON_VALUE_CHANGE_CONTEXT} and ensures a non-null value
 */
export function useDatePickerOnValueChangeContext(): DatePickerOnValueChange {
	const result = useContext(DATE_PICKER_ON_VALUE_CHANGE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
