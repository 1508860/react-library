import { type Context, createContext } from "react";

import type { DatePickerYears } from "../types/date-picker-years.type";

/**
 * Context to provide date picker years
 */
export const DATE_PICKER_YEARS_CONTEXT: Context<DatePickerYears | null> = createContext<DatePickerYears | null>(null);
