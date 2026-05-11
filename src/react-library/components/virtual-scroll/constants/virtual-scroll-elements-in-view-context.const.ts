import { type Context, createContext } from "react";

import type { VirtualScrollElementsInView } from "../types/virtual-scroll-elements-in-view.type";

/**
 * Context to provide virtual scroll elements in view
 */
export const VIRTUAL_SCROLL_ELEMENTS_IN_VIEW_CONTEXT: Context<VirtualScrollElementsInView | null> = createContext<VirtualScrollElementsInView | null>(null);
