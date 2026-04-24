import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import type { TextFieldIsPopulatedState } from "../../shared/types/text-field-is-populated-state.type";

import type { TextFieldCurrencyProps } from "../types/text-field-currency-props.type";

/**
 * Custom hook to resolve if the input currency value is populated based on parameters
 * @param props
 */
export function useTextFieldCurrencyIsPopulatedState(props: TextFieldCurrencyProps): TextFieldIsPopulatedState {

	const resolveState = useCallback<Callback<TextFieldIsPopulatedState>>(
		() => ({
			isDefault: (props.defaultValue === undefined ? props.value === undefined : props.value === props.defaultValue),
			isPopulated: props.value !== undefined
		}),
		[props.defaultValue, props.value]
	);
	const state = useResolveState(resolveState);

	return state;
};
