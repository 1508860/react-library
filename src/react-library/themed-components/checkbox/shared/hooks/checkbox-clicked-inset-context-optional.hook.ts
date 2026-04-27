import { useContext } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

import { CHECKBOX_CLICKED_INSET_CONTEXT } from "../constants/checkbox-clicked-inset-context.const";

/**
 * Returns context for {@link CHECKBOX_CLICKED_INSET_CONTEXT} and allows a null value if not provided
 */
export function useCheckboxClickedInsetContextOptional(): TransitionPulseInsetData | null {
	const result = useContext(CHECKBOX_CLICKED_INSET_CONTEXT);
	return result;
};
