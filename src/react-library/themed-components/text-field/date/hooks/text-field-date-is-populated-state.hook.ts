import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import type { TextFieldIsPopulatedState } from "../../shared/types/text-field-is-populated-state.type";

import type { TextFieldDateProps } from "../types/text-field-date-props.type";

/**
 * Custom hook to resolve if the input date value is populated based on parameters
 * @param props
 */
export function useTextFieldDateIsPopulatedState(props: TextFieldDateProps): TextFieldIsPopulatedState {

	const resolveState = useCallback<Callback<TextFieldIsPopulatedState>>(
		() => ({
			isDefault: props.value === undefined,
			isPopulated: props.value !== undefined
		}),
		[props.value]
	);
	const state = useResolveState(resolveState);

	return state;
};
