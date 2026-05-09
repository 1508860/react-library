import { type Context, createContext } from "react";

import type { MenuSelectedIds } from "../types/menu-props-selected-ids.type";

/**
 * Context to provide menu selected ids state
 */
export const MENU_SELECTED_IDS_CONTEXT: Context<MenuSelectedIds | null> = createContext<MenuSelectedIds | null>(null);
