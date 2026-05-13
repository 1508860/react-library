import { type Context, createContext } from "react";

/**
 * Context to provide virtual scroll item count
 */
export const VIRTUAL_SCROLL_ITEM_COUNT_CONTEXT: Context<number | null> = createContext<number | null>(null);
