import { type Context, createContext } from "react";

/**
 * Context to provide a switch is hovered state
 */
export const SWITCH_IS_HOVERED_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
