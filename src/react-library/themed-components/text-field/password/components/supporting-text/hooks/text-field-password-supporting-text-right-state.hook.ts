import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { TextFieldSupportingTextRightId } from "../../../../shared/enums/text-field-supporting-text-right-id.type";
import { isTextFieldSupportingTextConfigsEqual } from "../../../../shared/functions/is-text-field-supporting-text-config-equal.function";
import type { TextFieldSupportingTextConfigsRight } from "../../../../shared/types/text-field-props-supporting-text-config.type";

import type { TextFieldPasswordProps } from "../../../types/text-field-password-props.type";

/**
 * Custom hook to resolve the right config for supporting text for a text input
 */
export function useTextFieldpasswordSupportingTextRightState(props: TextFieldPasswordProps): TextFieldSupportingTextConfigsRight {

	const resolveState = useCallback<Callback<TextFieldSupportingTextConfigsRight>>(
		() => {
			const validation = props.validation;
			if (!validation) return [];

			const characterCount: number = props.value?.length ?? 0;
			const exceedsMaxCharacterCount: boolean = validation.maxCharacterCount !== undefined && characterCount > validation.maxCharacterCount;
			const exceedsMinCharacterCount: boolean = validation.minCharacterCount !== undefined && characterCount < validation.minCharacterCount;

			if (exceedsMinCharacterCount && exceedsMaxCharacterCount) {
				return [{
					id: TextFieldSupportingTextRightId.MinCharacterCount,
					isErrored: true,
					text: `${validation.minCharacterCount} <= ${characterCount} <= ${validation.maxCharacterCount}`
				}];
			}
			if (exceedsMinCharacterCount) {
				return [{
					id: TextFieldSupportingTextRightId.MinCharacterCount,
					isErrored: true,
					text: `${characterCount}/${validation.minCharacterCount} min`
				}];
			}
			if (exceedsMaxCharacterCount) {
				return [{
					id: TextFieldSupportingTextRightId.MaxCharacterCount,
					isErrored: true,
					text: `${characterCount}/${validation.maxCharacterCount}`
				}];
			}

			return [];
		},
		[props]
	);

	const isStateEqual = useCallback(isTextFieldSupportingTextConfigsEqual, []);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
};
