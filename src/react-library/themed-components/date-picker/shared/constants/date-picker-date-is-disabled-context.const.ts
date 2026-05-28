import { type Context, createContext } from "react";

/**
 * Context to provide date picker date is disabled state
 */
export const DATE_PICKER_DATE_IS_DISABLED_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
