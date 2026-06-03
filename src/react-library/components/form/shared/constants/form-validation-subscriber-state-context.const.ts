import { type Context, createContext } from "react";

import type { FormValidationSubscriberState } from "../types/form-validation-subscriber-state.type";

/**
 * Context to provide {@link FormValidationSubscriberState}
 */
export const FORM_VALIDATION_SUBSCRIBER_STATE_CONTEXT: Context<FormValidationSubscriberState | null> =
	createContext<FormValidationSubscriberState | null>(null);
