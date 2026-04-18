import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { TextFieldStyleState } from "../enums/text-field-style-state.type";

import { useTextFieldStyleStateContext } from "./text-field-style-state-context.hook";

/**
 * Custom hook to resolve if the {@link TextFieldStyleState} is an errored state
 */
export function useTextFieldIsErrored(): boolean {

	const styleState = useTextFieldStyleStateContext();

	const resolveState = useCallback<Callback<boolean>>(
		() => (
			styleState === TextFieldStyleState.Errored ||
			styleState === TextFieldStyleState.ErroredFocused ||
			styleState === TextFieldStyleState.ErroredHovered
		),
		[styleState]
	);
	const state = useResolveState(resolveState);

	return state;
};
