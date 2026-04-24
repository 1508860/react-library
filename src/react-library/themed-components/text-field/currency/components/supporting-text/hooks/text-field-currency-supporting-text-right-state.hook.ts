import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { TextFieldSupportingTextRightId } from "../../../../shared/enums/text-field-supporting-text-right-id.type";
import { isTextFieldSupportingTextConfigsEqual } from "../../../../shared/functions/is-text-field-supporting-text-config-equal.function";
import type { TextFieldSupportingTextConfigsRight } from "../../../../shared/types/text-field-props-supporting-text-config.type";

import type { TextFieldCurrencyProps } from "../../../types/text-field-currency-props.type";

/**
 * Custom hook to resolve the right config for supporting text for a currency input
 */
export function useTextFieldCurrencySupportingTextRightState(props: TextFieldCurrencyProps): TextFieldSupportingTextConfigsRight {

	const resolveState = useCallback<Callback<TextFieldSupportingTextConfigsRight>>(
		() => {
			if (props.isDisabled) return [];

			const validation = props.validation;
			if (!validation) return [];

			const result: TextFieldSupportingTextConfigsRight = [];

			if (validation.minValue !== undefined) {
				result.push({
					id: TextFieldSupportingTextRightId.MinNumber,
					isErrored: (props.value === undefined || props.value < validation.minValue),
					text: `min: ${validation.minValue}`
				});
			}
			if (validation.maxValue !== undefined) {
				result.push({
					id: TextFieldSupportingTextRightId.MaxNumber,
					isErrored: (props.value === undefined || props.value > validation.maxValue),
					text: `max: ${validation.maxValue}`
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
