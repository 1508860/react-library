import { type Context, createContext } from "react";

import type { IViewportPosition } from "@react-library/common";

/**
 * Context to provide overlay portal position in the viewport
 */
export const OVERLAY_PORTAL_VIEWPORT_POSITION_CONTEXT: Context<IViewportPosition | null> = createContext<IViewportPosition | null>(null);
