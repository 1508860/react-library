import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { DATE_PICKER_COLOUR_STATE_CONTEXT } from "../constants/date-picker-colour-state-context.const";
import type { DatePickerColourState } from "../types/date-picker-colour-state.type";

/**
 * Returns context for {@link DATE_PICKER_COLOUR_STATE_CONTEXT} and ensures a non-null value
 */
export function useDatePickerColourStateContext(): DatePickerColourState {
	const result = useContext(DATE_PICKER_COLOUR_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
