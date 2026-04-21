import { useCallback } from "react";

import {
	regexHasLowercase,
	regexHasNumeric,
	regexHasSpecialCharacter,
	regexHasUppercase,
	regexHasWhitespace,
	useResolveState,
	type Callback
} from "@react-library/common";

import { isTextFieldSupportingTextConfigEqual } from "../../../../shared/functions/is-text-field-supporting-text-config-equal.function";
import type { TextFieldSupportingTextConfig } from "../../../../shared/types/text-field-supporting-text-config.type";

import type { TextFieldPasswordProps } from "../../../types/text-field-password-props.type";

/**
 * Custom hook to resolve the left config for supporting text 
 */
export function useTextFieldPasswordSupportingTextLeftState(props: TextFieldPasswordProps): TextFieldSupportingTextConfig | undefined {

	const resolveState = useCallback<Callback<TextFieldSupportingTextConfig | undefined>>(
		() => {
			if (props.value === undefined) return { isErrored: true, text: "Is Required" };
			const validation = props.validation;
			if(!validation) return undefined;
			if (
				validation.hasLowercase &&
				!regexHasLowercase(props.value)
			) return { isErrored: true, text: "Requires lowercase character" };
			if (
				validation.hasUppercase &&
				!regexHasUppercase(props.value)
			) return { isErrored: true, text: "Requires uppercase character" };
			if (
				validation.hasNumeric &&
				!regexHasNumeric(props.value)
			) return { isErrored: true, text: "Requires numeric character" };
			if (
				validation.hasSpecialCharacter &&
				!regexHasSpecialCharacter(props.value)
			) return { isErrored: true, text: "Requires special character" };
			if (
				validation.hasNoWhitespace &&
				regexHasWhitespace(props.value)
			) return { isErrored: true, text: "Must not contain whitespace" };
			return undefined;
		},
		[props.validation, props.value]
	);

	const isStateEqual = useCallback(isTextFieldSupportingTextConfigEqual, []);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
};
