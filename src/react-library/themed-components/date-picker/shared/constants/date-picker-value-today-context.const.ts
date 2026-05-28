import { type Context, createContext } from "react";

import type { DatePickerValue } from "../types/date-picker-props-value.type";

/**
 * Context to provide date picker value for today's date
 */
export const DATE_PICKER_VALUE_TODAY_CONTEXT: Context<DatePickerValue | null> = createContext<DatePickerValue | null>(null);
