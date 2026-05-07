import { type Context, createContext } from "react";

/**
 * Context to provide menu group count
 */
export const MENU_GROUP_COUNT_CONTEXT: Context<number | null> = createContext<number | null>(null);
