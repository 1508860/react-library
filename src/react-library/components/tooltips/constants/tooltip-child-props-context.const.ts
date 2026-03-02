import { type Context, createContext } from "react";

import type { TooltipChildProps } from "../types/tooltip-child-props.type";

/**
 * Context to provide the child props state for the tooltip
 */
export const TOOLTIP_CHILD_PROPS_CONTEXT: Context<TooltipChildProps | null> = createContext<TooltipChildProps | null>(null);
