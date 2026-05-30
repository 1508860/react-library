import { type Context, createContext } from "react";

import type { DatePickerSelectionChangeSubject } from "../types/date-picker-selection-change-subject.type";

/**
 * Context to provide a date picker selection change subject
 */
export const DATE_PICKER_SELECTION_CHANGE_SUBJECT_CONTEXT: Context<DatePickerSelectionChangeSubject | null> =
	createContext<DatePickerSelectionChangeSubject | null>(null);
