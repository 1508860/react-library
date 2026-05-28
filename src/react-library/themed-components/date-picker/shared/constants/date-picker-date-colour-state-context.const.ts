import { type Context, createContext } from "react";

import type { DatePickerDateColourState } from "../types/date-picker-date-colour-state.type";

/**
 * Context to provide date picker date colour state
 */
export const DATE_PICKER_DATE_COLOUR_STATE_CONTEXT: Context<DatePickerDateColourState | null> = createContext<DatePickerDateColourState | null>(null);
