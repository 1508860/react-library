import { type Context, createContext } from "react";

import type { TooltipRichContentCallback } from "../types/tooltip-rich-content-callback.type";

/**
 * Context to set the content for the rich tooltip variant
 */
export const TOOLTIP_RICH_CONTENT_CALLBACK_CONTEXT: Context<TooltipRichContentCallback | null> = createContext<TooltipRichContentCallback | null>(null);
