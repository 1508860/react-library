import { type Context, createContext } from "react";

import type { TooltipPlainChildProps } from "../types/tooltip-plain-child-props.type";

/**
 * Context to provide the child props state for the tooltip plain component
 */
export const TOOLTIP_PLAIN_CHILD_PROPS_CONTEXT: Context<TooltipPlainChildProps | null> = createContext<TooltipPlainChildProps | null>(null);
