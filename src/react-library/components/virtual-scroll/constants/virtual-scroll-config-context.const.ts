import { type Context, createContext } from "react";

import type { VirtualScrollPropsConfig } from "../types/virtual-scroll-props-config.type";

/**
 * Context to provide virtual scroll config
 */
export const VIRTUAL_SCROLL_CONFIG_CONTEXT: Context<VirtualScrollPropsConfig | null> = createContext<VirtualScrollPropsConfig | null>(null);
