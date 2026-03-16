import { type Context, createContext } from "react";

import type { VirtualScrollItemSize } from "../types/virtual-scroll-item-size.type";

/**
 * Context to provide virtual scroll item size default
 */
export const VIRTUAL_SCROLL_ITEM_SIZE_DEFAULT_CONTEXT: Context<VirtualScrollItemSize | null> = createContext<VirtualScrollItemSize | null>(null);
