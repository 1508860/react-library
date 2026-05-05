import { type Context, createContext } from "react";

import type { RadioButtonEvents } from "../types/radio-button-events.type";

/**
 * Context to provide {@link RadioButtonEvents}
 */
export const RADIO_BUTTON_EVENTS_CONTEXT: Context<RadioButtonEvents | null> = createContext<RadioButtonEvents | null>(null);
