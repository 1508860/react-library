import { type Context, createContext } from "react";

/**
 * Context to provide the show state for the tooltip
 */
export const TOOLTIP_SHOW_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
