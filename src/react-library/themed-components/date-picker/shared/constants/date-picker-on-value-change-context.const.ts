import { type Context, createContext } from "react";

import type { DatePickerOnValueChange } from "../types/date-picker-props-on-value-change.type";

/**
 * Context to provide date picker on value change
 */
export const DATE_PICKER_ON_VALUE_CHANGE_CONTEXT: Context<DatePickerOnValueChange | null> = createContext<DatePickerOnValueChange | null>(null);
