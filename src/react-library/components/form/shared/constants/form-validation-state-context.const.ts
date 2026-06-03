import { type Context, createContext } from "react";

/**
 * Context to provide a boolean state for if the form fields within this context are valid
 */
export const FORM_VALIDATION_STATE_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
