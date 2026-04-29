import { type Context, createContext } from "react";

/**
 * Context to provide a radio button is errored state
 */
export const RADIO_BUTTON_IS_ERRORED_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
