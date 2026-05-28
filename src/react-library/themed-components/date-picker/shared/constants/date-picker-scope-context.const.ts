import { type Context, createContext } from "react";

import type { DatePickerScope } from "../types/date-picker-scope.type";

/**
 * Context to provide date picker scope
 */
export const DATE_PICKER_SCOPE_CONTEXT: Context<DatePickerScope | null> = createContext<DatePickerScope | null>(null);
