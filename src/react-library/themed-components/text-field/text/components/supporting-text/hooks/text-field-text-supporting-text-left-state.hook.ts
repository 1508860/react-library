import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { isTextFieldSupportingTextConfigEqual } from "../../../../shared/functions/is-text-field-supporting-text-config-equal.function";
import type { TextFieldSupportingTextConfig } from "../../../../shared/types/text-field-supporting-text-config.type";

import type { TextFieldTextProps } from "../../../types/text-field-text-props.type";

/**
 * Custom hook to resolve the left config for supporting text 
 */
export function useTextFieldTextSupportingTextLeftState(props: TextFieldTextProps): TextFieldSupportingTextConfig | undefined {

	const resolveState = useCallback<Callback<TextFieldSupportingTextConfig | undefined>>(
		() => {
			if (props.isDisabled) return undefined;
			if (props.isRequired && props.value === undefined) return { isErrored: true, text: "Is Required" };
			if (props.supportingText !== undefined) return { isErrored: false, text: props.supportingText };
		},
		[props.isDisabled, props.isRequired, props.supportingText, props.value]
	);

	const isStateEqual = useCallback(isTextFieldSupportingTextConfigEqual, []);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
};
