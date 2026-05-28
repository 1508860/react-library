import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { DATE_PICKER_SCOPE_CONTEXT } from "../constants/date-picker-scope-context.const";
import type { DatePickerScope } from "../types/date-picker-scope.type";

/**
 * Returns context for {@link DATE_PICKER_SCOPE_CONTEXT} and ensures a non-null value
 */
export function useDatePickerScopeContext(): DatePickerScope {
	const result = useContext(DATE_PICKER_SCOPE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
