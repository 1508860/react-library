import { type Context, createContext } from "react";

import type { DatePickerColourState } from "../types/date-picker-colour-state.type";

/**
 * Context to provide date picker colour state
 */
export const DATE_PICKER_COLOUR_STATE_CONTEXT: Context<DatePickerColourState | null> = createContext<DatePickerColourState | null>(null);
