import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { DATE_PICKER_YEARS_CONTEXT } from "../constants/date-picker-years-context.const";
import type { DatePickerYears } from "../types/date-picker-years.type";

/**
 * Returns context for {@link DATE_PICKER_YEARS_CONTEXT} and ensures a non-null value
 */
export function useDatePickerYearsContext(): DatePickerYears {
	const result = useContext(DATE_PICKER_YEARS_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
