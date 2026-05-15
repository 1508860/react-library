import { type Context, createContext } from "react";

/**
 * Context to provide a text field is hovered state
 */
export const TEXT_FIELD_IS_HOVERED_STATE_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
