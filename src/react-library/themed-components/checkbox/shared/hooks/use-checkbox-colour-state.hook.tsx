import { useCallback } from "react";

import { useColourSchemeContext, useResolveState } from "@react-library/common";

import type { CheckboxSelectedState } from "../enums/checkbox-selected-state.type";
import { isCheckboxColourStateEqual } from "../functions/is-checkbox-colour-state-equal.function";
import { resolveCheckboxColourState } from "../functions/resolve-checkbox-colour-state.function";
import type { CheckboxColourState } from "../types/checkbox-colour-state.type";

/**
 * Derive the checkbox colour state based on parameters
 * @param isDisabled
 * @param isErrored
 * @param selectedState
 */
export function useCheckboxColourState(
	isDisabled: boolean | undefined,
	isErrored: boolean,
	selectedState: CheckboxSelectedState
): CheckboxColourState {

	// Contexts
	const colourScheme = useColourSchemeContext();

	const resolveState = useCallback(
		() => resolveCheckboxColourState(!!isDisabled, colourScheme, isErrored, selectedState),
		[isDisabled, isErrored, selectedState, colourScheme]
	);

	const isStateEqual = useCallback(isCheckboxColourStateEqual, []);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
}
