import { useContext } from "react";

import { NullContextError, type Size } from "@react-library/common";

import { FORM_GAP_CONTEXT } from "../constants/form-gap-context.const";

/**
 * Returns context for {@link FORM_GAP_CONTEXT} and ensures a non-null value
 */
export function useFormGapContext(): Size {
	const result = useContext(FORM_GAP_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
}
