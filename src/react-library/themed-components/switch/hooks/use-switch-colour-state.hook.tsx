import { useCallback } from "react";

import { useColourSchemeContext, useResolveState } from "@react-library/common";

import { isSwitchColourStateEqual } from "../functions/is-switch-colour-state-equal.function";
import { resolveSwitchColourState } from "../functions/resolve-switch-colour-state.function";
import type { SwitchColourState } from "../types/switch-colour-state.type";

/**
 * Derive the switch colour state based on parameters
 * @param isDisabled
 * @param isRequired
 * @param value
 */
export function useSwitchColourState(
	isDisabled: boolean | undefined,
	isRequired: boolean | undefined,
	value: boolean
): SwitchColourState {

	// Contexts
	const colourScheme = useColourSchemeContext();

	const resolveState = useCallback(
		() => resolveSwitchColourState(!!isDisabled, value, colourScheme, (!!isRequired && !value)),
		[isDisabled, value, isRequired, colourScheme]
	);

	const isStateEqual = useCallback(isSwitchColourStateEqual, []);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
}
