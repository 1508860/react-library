import { useContext } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

import { BUTTON_CLICKED_INSET_CONTEXT } from "../constants/button-clicked-inset-context.const";

/**
 * Returns context for {@link BUTTON_CLICKED_INSET_CONTEXT} and allows a null value if not provided
 */
export function useButtonClickedInsetContextOptional(): TransitionPulseInsetData | null {
	const result = useContext(BUTTON_CLICKED_INSET_CONTEXT);
	return result;
};
