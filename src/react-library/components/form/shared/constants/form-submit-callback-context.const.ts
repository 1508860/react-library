import { type Context, createContext } from "react";

import type { FormSubmitCallback } from "../types/form-submit-callback.type";

/**
 * Context to provide {@link FormSubmitCallback} to submit a form
 */
export const FORM_SUBMIT_CALLBACK_CONTEXT: Context<FormSubmitCallback | null> = createContext<FormSubmitCallback | null>(null);
