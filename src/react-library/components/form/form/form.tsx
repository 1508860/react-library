import { useCallback, useState, type RefCallback } from "react";

import { SubscriberState, } from "@react-library/common";

import { FORM_SUBMIT_CALLBACK_CONTEXT } from "../shared/constants/form-submit-callback-context.const";
import { FORM_VALIDATION_STATE_CONTEXT } from "../shared/constants/form-validation-state-context.const";
import { FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT } from "../shared/constants/form-validation-subscriber-state-context.const";
import type { FormSubmitCallback } from "../shared/types/form-submit-callback.type";
import type { FormValidationSubscriberState } from "../shared/types/form-validation-subscriber-state.type";

import { formStyle } from "./styles/form-style.function";
import type { FormProps } from "./types/form-props.type";
import { FORM_GAP_CONTEXT } from "../shared/constants/form-gap-context.const";

/**
 * Form component
 */
export function Form(props: FormProps) {


	// Form validation
	const [isFormValid, setIsFormValid] = useState<boolean>(() => true);
	const [formValidationSubscriberState] = useState<FormValidationSubscriberState>(() => new SubscriberState<boolean>({
		onSubscribeChange: (values) => setIsFormValid(!values.some(x => !x.state))
	}));

	// Form submit
	const [formElement, setFormElement] = useState<HTMLFormElement | null>(null);
	const setFormElementCallback = useCallback<RefCallback<HTMLFormElement | null>>(
		(element) => setFormElement(element),
		[]
	);
	const submitForm = useCallback<FormSubmitCallback>(
		() => {
			if (!isFormValid) return;
			formElement?.submit();
		},
		[isFormValid, formElement]
	);

	return (
		<form
			action={props.action}
			method={props.method}
			name={props.name}
			ref={setFormElementCallback}
			style={formStyle(props.gap)}
		>
			<FORM_GAP_CONTEXT value={props.gap}>
				<FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT value={formValidationSubscriberState}>
					<FORM_VALIDATION_STATE_CONTEXT value={isFormValid}>
						<FORM_SUBMIT_CALLBACK_CONTEXT value={submitForm}>
							{props.children}
						</FORM_SUBMIT_CALLBACK_CONTEXT>
					</FORM_VALIDATION_STATE_CONTEXT>
				</FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT>
			</FORM_GAP_CONTEXT>
		</form>
	);
}
