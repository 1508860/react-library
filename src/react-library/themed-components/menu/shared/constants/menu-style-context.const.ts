import { type Context, createContext } from "react";

import type { MenuStyle } from "../enums/menu-style.type";

/**
 * Context to provide menu style state
 */
export const MENU_STYLE_CONTEXT: Context<MenuStyle | null> = createContext<MenuStyle | null>(null);
