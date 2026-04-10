import { type Context, createContext } from "react";

import type { VirtualScrollContentSize } from "../types/virtual-scroll-content-size.type";

/**
 * Context to provide the content size state for the virtual scroll content component
 */
export const VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT: Context<VirtualScrollContentSize | null> = createContext<VirtualScrollContentSize | null>(null);
