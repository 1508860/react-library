import { type Context, createContext } from "react";

/**
 * Context to provide a radio button is hovered state
 */
export const RADIO_BUTTON_IS_HOVERED_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
