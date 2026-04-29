import { type Context, createContext } from "react";

import type { RadioButtonOnValueChange } from "../types/radio-button-on-value-change.type";

/**
 * Context to provide a radio button on value change callback
 */
export const RADIO_BUTTON_ON_VALUE_CHANGE_CONTEXT: Context<RadioButtonOnValueChange | null> = createContext<RadioButtonOnValueChange | null>(null);
