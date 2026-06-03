import { useContext } from "react";

import { FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT } from "../constants/form-validation-subscriber-state-context.const";
import type { FormValidationSubscriberState } from "../types/form-validation-subscriber-state.type";

/**
 * Returns context for {@link FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT} and allows for an optional value
 */
export function useFormValidationSubscriberStateContextOptional(): FormValidationSubscriberState | null {
	const result = useContext(FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT);
	return result;
}
