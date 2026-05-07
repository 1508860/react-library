import { type Context, createContext } from "react";

import type { Size } from "@react-library/common";

/**
 * Context to provide menu width state
 */
export const MENU_WIDTH_CONTEXT: Context<Size | null> = createContext<Size | null>(null);
