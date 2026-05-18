import { useCallback } from "react";

import {
	useResolveState,
	type Callback,
	type CallbackWithParameter
} from "@react-library/common";

import type { CheckboxEvents } from "../types/checkbox-events.type";

/**
 * Resolve and maintain {@link CheckboxEvents} based on parameters
 * @param isDisabled
 * @param handleOnToggle
 * @param setIsHovered
 */
export function useCheckboxEventsState(
	isDisabled: boolean | undefined,
	handleOnToggle: Callback<void>,
	setIsHovered: CallbackWithParameter<boolean, void>
): CheckboxEvents {

	const resolveState = useCallback<Callback<CheckboxEvents>>(
		() => {
			if (isDisabled) return {
				onPointerEnter: () => { },
				onPointerLeave: () => { },
				onToggle: () => { }
			};
			return {
				onPointerEnter: () => setIsHovered(true),
				onPointerLeave: () => setIsHovered(false),
				onToggle: handleOnToggle
			};
		},
		[isDisabled, handleOnToggle, setIsHovered]
	);

	const state = useResolveState(resolveState);

	return state;
}
