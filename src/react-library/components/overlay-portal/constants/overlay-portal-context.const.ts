import { type Context, createContext } from "react";

import type { OverlayPortalContext } from "../types/overlay-portal-context.type";

/**
 * Context to provide overlay portal
 */
export const OVERLAY_PORTAL_CONTEXT: Context<OverlayPortalContext | null> = createContext<OverlayPortalContext | null>(null);
