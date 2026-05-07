import { type Context, createContext } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

/**
 * Context to provide menu item clicked inset
 */
export const MENU_ITEM_CLICKED_INSET_CONTEXT: Context<TransitionPulseInsetData | null> = createContext<TransitionPulseInsetData | null>(null);
