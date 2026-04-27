import { type Context, createContext } from "react";

import type { CheckboxColourState } from "../types/checkbox-colour-state.type";

/**
 * Context to provide checkbox colour state
 */
export const CHECKBOX_COLOUR_STATE_CONTEXT: Context<CheckboxColourState | null> = createContext<CheckboxColourState | null>(null);
