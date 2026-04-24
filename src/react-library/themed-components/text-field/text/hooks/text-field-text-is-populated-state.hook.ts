import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import type { TextFieldIsPopulatedState } from "../../shared/types/text-field-is-populated-state.type";

import type { TextFieldTextProps } from "../types/text-field-text-props.type";

/**
 * Custom hook to resolve if the input text value is populated based on parameters
 * @param props
 */
export function useTextFieldTextIsPopulatedState(props: TextFieldTextProps): TextFieldIsPopulatedState {

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
