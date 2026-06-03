import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";
import { useFormValidationSubscriberOptional } from "@react-library/components";

import { RADIO_BUTTON_IS_ERRORED_CONTEXT } from "../shared/constants/radio-button-is-errored-context.const";
import { RADIO_BUTTON_NAME_CONTEXT } from "../shared/constants/radio-button-name-context.const";
import { RADIO_BUTTON_ON_VALUE_CHANGE_CONTEXT } from "../shared/constants/radio-button-on-value-change-context.const";
import { RADIO_BUTTON_VALUE_CONTEXT } from "../shared/constants/radio-button-value-context.const";

import type { RadioButtonGroupProps } from "./types/radio-button-group-props.type";

/**
 * Radio button group component
 */
export function RadioButtonGroup(props: RadioButtonGroupProps) {

	// Is Errored
	const resolveIsErrored = useCallback<Callback<boolean>>(
		() => (!!props.isRequired && props.value === undefined),
		[props.isRequired, props.value]
	);
	const isErrored = useResolveState(resolveIsErrored);

	// Handle optional form validation
	useFormValidationSubscriberOptional(!isErrored);

	return (
		<RADIO_BUTTON_IS_ERRORED_CONTEXT value={isErrored}>
			<RADIO_BUTTON_NAME_CONTEXT value={props.name}>
				<RADIO_BUTTON_ON_VALUE_CHANGE_CONTEXT value={props.onValueChange}>
					<RADIO_BUTTON_VALUE_CONTEXT value={props.value}>
						{props.children}
					</RADIO_BUTTON_VALUE_CONTEXT>
				</RADIO_BUTTON_ON_VALUE_CHANGE_CONTEXT>
			</RADIO_BUTTON_NAME_CONTEXT>
		</RADIO_BUTTON_IS_ERRORED_CONTEXT>
	);
}
