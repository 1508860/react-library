import { type Context, createContext } from "react";

import type { MenuSelectDemoOnSelect } from "../types/menu-select-demo-on-select.type";

export const MENU_SELECT_DEMO_ON_SELECT_CONTEXT: Context<MenuSelectDemoOnSelect | null> = createContext<MenuSelectDemoOnSelect | null>(null);
