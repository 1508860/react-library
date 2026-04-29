import { type Context, createContext } from "react";

import type { RadioButtonColourState } from "../types/radio-button-colour-state.type";

/**
 * Context to provide radio button colour state
 */
export const RADIO_BUTTON_COLOUR_STATE_CONTEXT: Context<RadioButtonColourState | null> = createContext<RadioButtonColourState | null>(null);
