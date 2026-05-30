import { type Context, createContext } from "react";

import type { DatePickerSetSelectionStateCallback } from "../types/date-picker-set-selection-state-callback.type";

/**
 * Context to provide a date picker set selection state callback
 */
export const DATE_PICKER_SET_SELECTION_STATE_CALLBACK_CONTEXT: Context<DatePickerSetSelectionStateCallback | null> =
	createContext<DatePickerSetSelectionStateCallback | null>(null);
