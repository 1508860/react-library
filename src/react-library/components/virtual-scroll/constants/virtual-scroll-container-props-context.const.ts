import { type Context, createContext } from "react";

import type { VirtualScrollContainerProps } from "../types/virtual-scroll-container-props.type";

/**
 * Context to provide the container props state for the virtual scroll container component
 */
export const VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT: Context<VirtualScrollContainerProps | null> = createContext<VirtualScrollContainerProps | null>(null);
