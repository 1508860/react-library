import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { RADIO_BUTTON_COLOUR_STATE_CONTEXT } from "../constants/radio-button-colour-state-context.const";
import type { RadioButtonColourState } from "../types/radio-button-colour-state.type";

/**
 * Returns context for {@link RADIO_BUTTON_COLOUR_STATE_CONTEXT} and ensures a non-null value
 */
export function useRadioButtonColourStateContext(): RadioButtonColourState {
	const result = useContext(RADIO_BUTTON_COLOUR_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
