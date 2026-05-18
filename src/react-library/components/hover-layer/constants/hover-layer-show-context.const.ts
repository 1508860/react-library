import { type Context, createContext } from "react";

/**
 * Context to provide hover layer show state
 */
export const HOVER_LAYER_SHOW_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
