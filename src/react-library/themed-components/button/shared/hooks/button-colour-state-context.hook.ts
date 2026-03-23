import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { BUTTON_COLOUR_STATE_CONTEXT } from "../constants/button-colour-state-context.const";
import type { ButtonColourState } from "../types/button-colour-state.type";

/**
 * Returns context for {@link BUTTON_COLOUR_STATE_CONTEXT} and ensures a non-null value
 */
export function useButtonColourStateContext(): ButtonColourState {
	const result = useContext(BUTTON_COLOUR_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
