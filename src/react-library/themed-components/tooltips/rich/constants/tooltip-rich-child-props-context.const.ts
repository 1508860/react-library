import { type Context, createContext } from "react";

import type { TooltipRichChildProps } from "../types/tooltip-rich-child-props.type";

/**
 * Context to provide the child props state for the tooltip rich component
 */
export const TOOLTIP_RICH_CHILD_PROPS_CONTEXT: Context<TooltipRichChildProps | null> = createContext<TooltipRichChildProps | null>(null);
