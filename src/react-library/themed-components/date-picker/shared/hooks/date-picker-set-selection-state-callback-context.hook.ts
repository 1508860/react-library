import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { DATE_PICKER_SET_SELECTION_STATE_CALLBACK_CONTEXT } from "../constants/date-picker-set-selection-state-callback-context.const";
import type { DatePickerSetSelectionStateCallback } from "../types/date-picker-set-selection-state-callback.type";

/**
 * Returns context for {@link DATE_PICKER_SET_SELECTION_STATE_CALLBACK_CONTEXT} and ensures a non-null value
 */
export function useDatePickerSetSelectionStateCallbackContext(): DatePickerSetSelectionStateCallback {
	const result = useContext(DATE_PICKER_SET_SELECTION_STATE_CALLBACK_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
