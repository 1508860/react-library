import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { DATE_PICKER_SELECTION_CHANGE_SUBJECT_CONTEXT } from "../constants/date-picker-selection-change-subject-context.const";
import type { DatePickerSelectionChangeSubject } from "../types/date-picker-selection-change-subject.type";

/**
 * Returns context for {@link DATE_PICKER_SELECTION_CHANGE_SUBJECT_CONTEXT} and ensures a non-null value
 */
export function useDatePickerSelectionChangeSubjectContext(): DatePickerSelectionChangeSubject {
	const result = useContext(DATE_PICKER_SELECTION_CHANGE_SUBJECT_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
