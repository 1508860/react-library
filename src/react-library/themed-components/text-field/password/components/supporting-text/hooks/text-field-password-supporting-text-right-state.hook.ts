import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { isTextFieldSupportingTextConfigEqual } from "../../../../shared/functions/is-text-field-supporting-text-config-equal.function";
import type { TextFieldSupportingTextConfig } from "../../../../shared/types/text-field-supporting-text-config.type";

import type { TextFieldPasswordProps } from "../../../types/text-field-password-props.type";

/**
 * Custom hook to resolve the right config for supporting text 
 */
export function useTextFieldpasswordSupportingTextRightState(props: TextFieldPasswordProps): TextFieldSupportingTextConfig | undefined {

	const resolveState = useCallback<Callback<TextFieldSupportingTextConfig | undefined>>(
		() => {
			const characterCount: number = props.value?.length ?? 0;
			const validation = props.validation;
			if(!validation) return undefined;
			if (validation.maxCharacterCount !== undefined && characterCount > validation.maxCharacterCount) {
				return {
					isErrored: true,
					text: `${characterCount}/${validation.maxCharacterCount}`
				};
			}
			if (validation.minCharacterCount !== undefined && characterCount < validation.minCharacterCount) {
				return {
					isErrored: true,
					text: `${characterCount}/${validation.minCharacterCount} min`
				};
			}
			return undefined;
		},
		[props]
	);

	const isStateEqual = useCallback(isTextFieldSupportingTextConfigEqual, []);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
};
