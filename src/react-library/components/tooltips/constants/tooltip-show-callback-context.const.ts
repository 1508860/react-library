import { type Context, createContext } from "react";

import type { TooltipShowCallback } from "../types/tooltip-show-callback.type";

/**
 * Context to set the show state for the tooltip
 */
export const TOOLTIP_SHOW_CALLBACK_CONTEXT: Context<TooltipShowCallback | null> = createContext<TooltipShowCallback | null>(null);
