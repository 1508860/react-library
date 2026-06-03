import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT } from "../constants/form-validation-subscriber-state-context.const";
import type { FormValidationSubscriberState } from "../types/form-validation-subscriber-state.type";

/**
 * Returns context for {@link FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT} and ensures a non-null value
 */
export function useFormValidationSubscriberStateContext(): FormValidationSubscriberState {
	const result = useContext(FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
}
