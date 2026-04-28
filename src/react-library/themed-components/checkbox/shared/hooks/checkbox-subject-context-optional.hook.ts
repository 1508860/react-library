import { useContext } from "react";

import { CHECKBOX_SUBJECT_CONTEXT } from "../constants/checkbox-subject-context.const";
import type { CheckboxSubject } from "../types/checkbox-subject.type";

/**
 * Returns context for {@link CHECKBOX_SUBJECT_CONTEXT} and allows for an optional value
 */
export function useCheckboxSubjectContextOptional(): CheckboxSubject | null {
	const result = useContext(CHECKBOX_SUBJECT_CONTEXT);
	return result;
};
