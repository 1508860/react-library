import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { DATE_PICKER_DATE_IS_DISABLED_CONTEXT } from "../constants/date-picker-date-is-disabled-context.const";

/**
 * Returns context for {@link DATE_PICKER_DATE_IS_DISABLED_CONTEXT} and ensures a non-null value
 */
export function useDatePickerDateIsDisabledContext(): boolean {
	const result = useContext(DATE_PICKER_DATE_IS_DISABLED_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
