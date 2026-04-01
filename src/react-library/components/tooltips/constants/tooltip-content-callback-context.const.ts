import { type Context, createContext } from "react";

import type { TooltipContentCallback } from "../types/tooltip-content-callback.type";

/**
 * Context to set the content element for the tooltip
 */
export const TOOLTIP_CONTENT_CALLBACK_CONTEXT: Context<TooltipContentCallback | null> = createContext<TooltipContentCallback | null>(null);
