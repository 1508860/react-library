import { type Context, createContext } from "react";

import type { RadioButtonValueOptional } from "../types/radio-button-value-optional.type";

/**
 * Context to provide a radio button checked value
 */
export const RADIO_BUTTON_VALUE_CONTEXT: Context<RadioButtonValueOptional | null> = createContext<RadioButtonValueOptional | null>(null);
