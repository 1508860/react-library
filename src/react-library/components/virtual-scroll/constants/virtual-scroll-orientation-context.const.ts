import { type Context, createContext } from "react";

import type { VirtualScrollOrientation } from "../types/virtual-scroll-orientation.type";

/**
 * Context to provide virtual scroll orientation
 */
export const VIRTUAL_SCROLL_ORIENTATION_CONTEXT: Context<VirtualScrollOrientation | null> = createContext<VirtualScrollOrientation | null>(null);
