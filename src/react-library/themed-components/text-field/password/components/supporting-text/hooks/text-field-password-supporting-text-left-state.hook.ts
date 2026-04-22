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

import { TextFieldSupportingTextLeftId } from "../../../../shared/enums/text-field-supporting-text-left-id.type";
import { isTextFieldSupportingTextConfigsEqual } from "../../../../shared/functions/is-text-field-supporting-text-config-equal.function";
import type { TextFieldSupportingTextConfigsLeft } from "../../../../shared/types/text-field-props-supporting-text-config.type";

import type { TextFieldPasswordProps } from "../../../types/text-field-password-props.type";

/**
 * Custom hook to resolve the left config for supporting text for a text input
 */
export function useTextFieldPasswordSupportingTextLeftState(props: TextFieldPasswordProps): TextFieldSupportingTextConfigsLeft {

	const resolveState = useCallback<Callback<TextFieldSupportingTextConfigsLeft>>(
		() => {
			if (props.value === undefined)
				return [{ id: TextFieldSupportingTextLeftId.IsRequired, isErrored: true, text: "Is Required" }];

			const validation = props.validation;
			if (!validation) return [];

			const result: TextFieldSupportingTextConfigsLeft = [];

			if (validation.hasLowercase && !regexHasLowercase(props.value))
				result.push({ id: TextFieldSupportingTextLeftId.HasLowercase, isErrored: true, text: "Requires lowercase character" });
			if (validation.hasUppercase && !regexHasUppercase(props.value))
				result.push({ id: TextFieldSupportingTextLeftId.HasUppercase, isErrored: true, text: "Requires uppercase character" });
			if (validation.hasNumeric && !regexHasNumeric(props.value))
				result.push({ id: TextFieldSupportingTextLeftId.HasNumeric, isErrored: true, text: "Requires numeric character" });
			if (validation.hasSpecialCharacter && !regexHasSpecialCharacter(props.value))
				result.push({ id: TextFieldSupportingTextLeftId.HasSpecialCharacter, isErrored: true, text: "Requires special character" });
			if (validation.hasNoWhitespace)
				result.push({
					id: TextFieldSupportingTextLeftId.HasNoWhitespace,
					isErrored: regexHasWhitespace(props.value),
					text: "Must not contain whitespace"
				});

			return result;
		},
		[props.validation, props.value]
	);

	const isStateEqual = useCallback(isTextFieldSupportingTextConfigsEqual, []);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
};
