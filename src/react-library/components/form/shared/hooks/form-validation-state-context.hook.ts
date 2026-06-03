import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { FORM_VALIDATION_STATE_CONTEXT } from "../constants/form-validation-state-context.const";

/**
 * Returns context for {@link FORM_VALIDATION_STATE_CONTEXT} and ensures a non-null value
 */
export function useFormValidationStateContext(): boolean {
	const result = useContext(FORM_VALIDATION_STATE_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
}
