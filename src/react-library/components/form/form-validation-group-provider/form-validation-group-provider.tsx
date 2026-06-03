import { useState } from "react";

import { SubscriberState, } from "@react-library/common";

import { FORM_VALIDATION_STATE_CONTEXT } from "../shared/constants/form-validation-state-context.const";
import { FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT } from "../shared/constants/form-validation-subscriber-state-context.const";
import { useFormValidationSubscriber } from "../shared/hooks/use-form-validation-subscriber.hook";
import type { FormValidationSubscriberState } from "../shared/types/form-validation-subscriber-state.type";

import type { FormValidationGroupProviderProps } from "./types/form-validation-group-provider-props.type";

/**
 * Form component
 */
export function FormValidationGroupProvider(props: FormValidationGroupProviderProps) {

	// Form validation
	const [isFormValid, setIsFormValid] = useState<boolean>(() => true);
	const [formValidationSubscriberState] = useState<FormValidationSubscriberState>(() => new SubscriberState<boolean>({
		onSubscribeChange: (values) => setIsFormValid(!values.some(x => !x.state))
	}));

	// Form validation subscriber
	useFormValidationSubscriber(isFormValid);

	return (
		<FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT value={formValidationSubscriberState}>
			<FORM_VALIDATION_STATE_CONTEXT value={isFormValid}>
				{props.children}
			</FORM_VALIDATION_STATE_CONTEXT>
		</FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT>
	);
}
