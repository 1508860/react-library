import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { FORM_SUBMIT_CALLBACK_CONTEXT } from "../constants/form-submit-callback-context.const";
import type { FormSubmitCallback } from "../types/form-submit-callback.type";

/**
 * Returns context for {@link FORM_SUBMIT_CALLBACK_CONTEXT} and ensures a non-null value
 */
export function useFormSubmitCallbackContext(): FormSubmitCallback {
	const result = useContext(FORM_SUBMIT_CALLBACK_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
}
