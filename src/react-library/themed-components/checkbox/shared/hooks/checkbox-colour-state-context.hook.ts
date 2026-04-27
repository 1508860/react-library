import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { CHECKBOX_COLOUR_STATE_CONTEXT } from "../constants/checkbox-colour-state-context.const";
import type { CheckboxColourState } from "../types/checkbox-colour-state.type";

/**
 * Returns context for {@link CHECKBOX_COLOUR_STATE_CONTEXT} and ensures a non-null value
 */
export function useCheckboxColourStateContext(): CheckboxColourState {
	const result = useContext(CHECKBOX_COLOUR_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
