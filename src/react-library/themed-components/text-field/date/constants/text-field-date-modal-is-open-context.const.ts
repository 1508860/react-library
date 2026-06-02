import { type Context, createContext } from "react";

/**
 * Context to provide text field date modal is open state
 */
export const TEXT_FIELD_DATE_MODAL_IS_OPEN_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
