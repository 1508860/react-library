import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import type { TextFieldIsPopulatedState } from "../../shared/types/text-field-is-populated-state.type";

import type { TextFieldNumberProps } from "../types/text-field-number-props.type";

/**
 * Custom hook to resolve if the input number value is populated based on parameters
 * @param props
 */
export function useTextFieldNumberIsPopulatedState(props: TextFieldNumberProps): TextFieldIsPopulatedState {

	const resolveState = useCallback<Callback<TextFieldIsPopulatedState>>(
		() => ({
			isDefault: (props.defaultNumber === undefined ? props.value === undefined : props.value === props.defaultNumber),
			isPopulated: props.value !== undefined
		}),
		[props.defaultNumber, props.value]
	);
	const state = useResolveState(resolveState);

	return state;
};
