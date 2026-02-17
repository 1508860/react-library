import { type Context, createContext } from "react";

import type { ViewportPositionPx } from "@react-library/common";

/**
 * Context to provide overlay portal position in the viewport in px
 */
export const OVERLAY_PORTAL_VIEWPORT_POSITION_PX_CONTEXT: Context<ViewportPositionPx | null> = createContext<ViewportPositionPx | null>(null);
