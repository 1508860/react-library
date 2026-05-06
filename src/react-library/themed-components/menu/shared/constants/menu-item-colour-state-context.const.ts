import { type Context, createContext } from "react";

import type { MenuItemColourState } from "../types/menu-item-colour-state.type";

/**
 * Context to provide menu item colour state
 */
export const MENU_ITEM_COLOUR_STATE_CONTEXT: Context<MenuItemColourState | null> = createContext<MenuItemColourState | null>(null);
