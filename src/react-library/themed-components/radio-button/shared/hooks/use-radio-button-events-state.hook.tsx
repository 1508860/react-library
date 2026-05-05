import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import type { RadioButtonEvents } from "../types/radio-button-events.type";

/**
 * Resolve and maintain {@link RadioButtonEvents} based on parameters
 * @param handleOnChecked
 * @param setIsHovered
 */
export function useRadioButtonEventsState(
	handleOnChecked: Callback<void>
): RadioButtonEvents {

	const resolveState = useCallback<Callback<RadioButtonEvents>>(
		() => ({
			onChecked: handleOnChecked
		}),
		[handleOnChecked]
	);

	const state = useResolveState(resolveState);

	return state;
}
