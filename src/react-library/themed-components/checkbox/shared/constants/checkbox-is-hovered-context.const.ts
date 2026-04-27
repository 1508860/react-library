import { type Context, createContext } from "react";

/**
 * Context to provide checkbox is hovered state
 */
export const CHECKBOX_IS_HOVERED_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
