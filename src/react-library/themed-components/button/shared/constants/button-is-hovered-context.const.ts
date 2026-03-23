import { type Context, createContext } from "react";

/**
 * Context to provide button is hovered state
 */
export const BUTTON_IS_HOVERED_CONTEXT: Context<boolean> = createContext<boolean>(false);
