import { useCallback } from "react";

import {
	useColourSchemeContext,
	useResolveState,
	type Callback
} from "@react-library/common";

import { isScrollColourEqual, type ScrollColour } from "../../../shared";

/**
 * Derive the date picker virtual scroll colour state based on parameters
 * @param style
 */
export function useDatePickerVirtualScrollColourState(): ScrollColour {

	// Contexts
	const colourScheme = useColourSchemeContext();

	const resolveState = useCallback<Callback<ScrollColour>>(
		() => ({
			scrollbarColour: colourScheme.primary.default.colour
		}),
		[colourScheme]
	);

	const state = useResolveState(resolveState, isScrollColourEqual);

	return state;
}
