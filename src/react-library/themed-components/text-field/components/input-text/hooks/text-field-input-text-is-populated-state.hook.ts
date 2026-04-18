import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import type { TextFieldPropsText } from "../../../types/text-field-props.type";

import type { TextFieldInputTextIsPopulated } from "../types/text-field-input-text-is-populated.type";

/**
 * Custom hook to resolve if the input text value is populated based on parameters
 * @param props
 */
export function useTextFieldInputTextIsPopulatedState(props: TextFieldPropsText): TextFieldInputTextIsPopulated {

	const resolveState = useCallback<Callback<TextFieldInputTextIsPopulated>>(
		() => ({
			isDefault: (props.defaultText === undefined ? props.value === undefined : props.value === props.defaultText),
			isPopulated: props.value !== undefined
		}),
		[props.defaultText, props.value]
	);
	const state = useResolveState(resolveState);

	return state;
};
