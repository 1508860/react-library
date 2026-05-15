import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { TextFieldSupportingTextLeftId } from "../../../../shared/enums/text-field-supporting-text-left-id.type";
import { isTextFieldSupportingTextConfigsEqual } from "../../../../shared/functions/is-text-field-supporting-text-config-equal.function";
import type { TextFieldSupportingTextConfigsLeft } from "../../../../shared/types/text-field-props-supporting-text-config.type";

import type { TextFieldCurrencyProps } from "../../../types/text-field-currency-props.type";

/**
 * Custom hook to resolve the left config for supporting text for a currency input
 */
export function useTextFieldCurrencySupportingTextLeftState(props: TextFieldCurrencyProps): TextFieldSupportingTextConfigsLeft {

	const resolveState = useCallback<Callback<TextFieldSupportingTextConfigsLeft>>(
		() => {
			if (props.isDisabled) return [];

			const result: TextFieldSupportingTextConfigsLeft = [];
			
			if (props.supportingText !== undefined)
				result.push({ id: TextFieldSupportingTextLeftId.SupportingText, isErrored: false, text: props.supportingText });
			if (props.isRequired && props.value === undefined)
				result.push({ id: TextFieldSupportingTextLeftId.IsRequired, isErrored: true, text: "Is Required" });
			
			return result;
		},
		[props.isDisabled, props.isRequired, props.supportingText, props.value]
	);

	const isStateEqual = useCallback(isTextFieldSupportingTextConfigsEqual, []);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
};
