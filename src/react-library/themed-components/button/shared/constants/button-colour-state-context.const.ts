import { type Context, createContext } from "react";

import type { ButtonColourState } from "../types/button-colour-state.type";

/**
 * Context to provide button colour state
 */
export const BUTTON_COLOUR_STATE_CONTEXT: Context<ButtonColourState | null> = createContext<ButtonColourState | null>(null);
