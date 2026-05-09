import { type Context, createContext } from "react";

import type { MenuStandardDemoOnSelect } from "../types/menu-standard-demo-on-select.type";

export const MENU_STANDARD_DEMO_ON_SELECT_CONTEXT: Context<MenuStandardDemoOnSelect | null> = createContext<MenuStandardDemoOnSelect | null>(null);
