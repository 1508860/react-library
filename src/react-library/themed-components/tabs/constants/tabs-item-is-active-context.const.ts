import { type Context, createContext } from "react";

/**
 * Context to provide a boolean state for if the item is active or not
 */
export const TABS_ITEM_IS_ACTIVE_CONTEXT: Context<boolean | null> = createContext<boolean | null>(null);
