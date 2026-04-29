import { useCallback } from "react";

import { useColourSchemeContext, useResolveState } from "@react-library/common";

import type { RadioButtonValue } from "../enums/radio-button-value.type";
import { isRadioButtonColourStateEqual } from "../functions/is-radio-button-colour-state-equal.function";
import { resolveRadioButtonColourState } from "../functions/resolve-radio-button-colour-state.function";
import type { RadioButtonColourState } from "../types/radio-button-colour-state.type";

import { useRadioButtonValueContext } from "./radio-button-value-context.hook";

/**
 * Derive the radio button colour state based on parameters
 * @param isDisabled
 * @param value
 * @param isErrored
 */
export function useRadioButtonColourState(
	isDisabled: boolean | undefined,
	value: RadioButtonValue,
	isErrored: boolean,
): RadioButtonColourState {

	// Contexts
	const colourScheme = useColourSchemeContext();

	// Local contexts
	const radioButtonValue = useRadioButtonValueContext();

	const resolveState = useCallback(
		() => resolveRadioButtonColourState(!!isDisabled, colourScheme, isErrored, value === radioButtonValue),
		[isDisabled, value, isErrored, colourScheme, radioButtonValue]
	);

	const isStateEqual = useCallback(isRadioButtonColourStateEqual, []);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
}
