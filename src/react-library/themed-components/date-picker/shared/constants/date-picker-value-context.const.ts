import { type Context, createContext } from "react";

import type { DatePickerValue } from "../types/date-picker-props-value.type";

/**
 * Context to provide date picker value
 */
export const DATE_PICKER_VALUE_CONTEXT: Context<DatePickerValue | undefined | null> = createContext<DatePickerValue | undefined | null>(null);
