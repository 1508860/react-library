import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { DATE_PICKER_VALUE_CONTEXT } from "../constants/date-picker-value-context.const";
import type { DatePickerValue } from "../types/date-picker-props-value.type";

/**
 * Returns context for {@link DATE_PICKER_VALUE_CONTEXT} and ensures a non-null value
 */
export function useDatePickerValueContext(): DatePickerValue | undefined {
	const result = useContext(DATE_PICKER_VALUE_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
