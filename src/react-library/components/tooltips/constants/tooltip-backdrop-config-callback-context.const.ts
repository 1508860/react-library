import { type Context, createContext } from "react";

import type { TooltipBackdropConfigCallback } from "../types/tooltip-backdrop-config-callback.type";

/**
 * Context to set the backdrop config for the tooltip
 */
export const TOOLTIP_BACKDROP_CONFIG_CALLBACK_CONTEXT: Context<TooltipBackdropConfigCallback | null> = createContext<TooltipBackdropConfigCallback | null>(null);
