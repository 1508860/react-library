import { type Context, createContext } from "react";

import type { SwitchColourState } from "../types/switch-colour-state.type";

/**
 * Context to provide switch colour state
 */
export const SWITCH_COLOUR_STATE_CONTEXT: Context<SwitchColourState | null> = createContext<SwitchColourState | null>(null);
