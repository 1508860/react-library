import { useCallback } from "react";

import { regexWordCount, useResolveState, type Callback } from "@react-library/common";

import { TextFieldSupportingTextRightId } from "../../../../shared/enums/text-field-supporting-text-right-id.type";
import { isTextFieldSupportingTextConfigsEqual } from "../../../../shared/functions/is-text-field-supporting-text-config-equal.function";
import type { TextFieldSupportingTextConfigsRight } from "../../../../shared/types/text-field-props-supporting-text-config.type";

import type { TextFieldTextProps } from "../../../types/text-field-text-props.type";

/**
 * Custom hook to resolve the right config for supporting text for a text input
 */
export function useTextFieldTextSupportingTextRightState(props: TextFieldTextProps): TextFieldSupportingTextConfigsRight {

	const resolveState = useCallback<Callback<TextFieldSupportingTextConfigsRight>>(
		() => {
			if (props.isDisabled) return [];

			const validation = props.validation;
			if (!validation) return [];

			const result: TextFieldSupportingTextConfigsRight = [];
			const characterCount: number = props.value?.length ?? 0;
			const wordCount: number = props.value !== undefined ? regexWordCount(props.value) : 0;

			if (validation.maxCharacterCount !== undefined) {
				result.push({
					id: TextFieldSupportingTextRightId.MaxCharacterCount,
					isErrored: (characterCount > validation.maxCharacterCount),
					text: `${characterCount}/${validation.maxCharacterCount}${validation.maxWordCount !== undefined ? " (char)" : ""}`
				});
			}
			if (validation.maxWordCount !== undefined) {
				result.push({
					id: TextFieldSupportingTextRightId.MaxWordCount,
					isErrored: (wordCount > validation.maxWordCount),
					text: `${wordCount}/${validation.maxWordCount}${validation.maxCharacterCount !== undefined ? " (word)" : ""}`
				});
			}
			return result;
		},
		[props]
	);

	const isStateEqual = useCallback(isTextFieldSupportingTextConfigsEqual, []);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
};
