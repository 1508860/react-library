import { type Context, createContext } from "react";

import type { FloatingButtonGroupPosition } from "../types/floating-button-group-position.type";

/**
 * Context to provide a floating button group position
 */
export const FLOATING_BUTTON_GROUP_POSITION_CONTEXT: Context<FloatingButtonGroupPosition | null> = createContext<FloatingButtonGroupPosition | null>(null);
