import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { CHECKBOX_SELECTED_STATE_CONTEXT } from "../constants/checkbox-selected-state-context.const";
import type { CheckboxSelectedState } from "../enums/checkbox-selected-state.type";

/**
 * Returns context for {@link CHECKBOX_SELECTED_STATE_CONTEXT} and ensures a non-null value
 */
export function useCheckboxSelectedStateContext(): CheckboxSelectedState {
	const result = useContext(CHECKBOX_SELECTED_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
