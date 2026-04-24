import { type Context, createContext } from "react";

/**
 * Context to provide a boolean state for if to show content or not
 */
export const TEXT_FIELD_SHOW_CONTENT_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
