import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { DATE_PICKER_DATE_COLOUR_STATE_CONTEXT } from "../constants/date-picker-date-colour-state-context.const";
import type { DatePickerDateColourState } from "../types/date-picker-date-colour-state.type";

/**
 * Returns context for {@link DATE_PICKER_DATE_COLOUR_STATE_CONTEXT} and ensures a non-null value
 */
export function useDatePickerDateColourStateContext(): DatePickerDateColourState {
	const result = useContext(DATE_PICKER_DATE_COLOUR_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
