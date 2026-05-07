import { type Context, createContext } from "react";

/**
 * Context to provide menu item is hovered state
 */
export const MENU_ITEM_IS_HOVERED_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
