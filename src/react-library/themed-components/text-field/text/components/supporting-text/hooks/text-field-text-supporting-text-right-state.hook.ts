import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { TextFieldValidationText } from "../../../../shared/enums/text-field-validation-text.type";
import { isTextFieldSupportingTextConfigEqual } from "../../../../shared/functions/is-text-field-supporting-text-config-equal.function";
import type { TextFieldSupportingTextConfig } from "../../../../shared/types/text-field-supporting-text-config.type";

import type { TextFieldTextProps } from "../../../types/text-field-text-props.type";

/**
 * Custom hook to resolve the right config for supporting text 
 */
export function useTextFieldTextSupportingTextRightState(props: TextFieldTextProps): TextFieldSupportingTextConfig | undefined {

	const resolveState = useCallback<Callback<TextFieldSupportingTextConfig | undefined>>(
		() => {
			if (props.isDisabled) return undefined;
			if (props.validation === TextFieldValidationText.Character) {
				const characterCount: number = props.value?.length ?? 0;
				return {
					isErrored: (characterCount > props.maxCharacterCount),
					text: `${characterCount}/${props.maxCharacterCount}`
				};
			}
			if (props.validation === TextFieldValidationText.Word) {
				const wordCount: number = props.value?.split(/\s+/).length ?? 0;
				return {
					isErrored: (wordCount > props.maxWordCount),
					text: `${wordCount}/${props.maxWordCount}`
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
