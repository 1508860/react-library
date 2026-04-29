import { useContext } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

import { RADIO_BUTTON_CLICKED_INSET_CONTEXT } from "../constants/radio-button-clicked-inset-context.const";

/**
 * Returns context for {@link RADIO_BUTTON_CLICKED_INSET_CONTEXT} and allows a null value if not provided
 */
export function useRadioButtonClickedInsetContextOptional(): TransitionPulseInsetData | null {
	const result = useContext(RADIO_BUTTON_CLICKED_INSET_CONTEXT);
	return result;
};
