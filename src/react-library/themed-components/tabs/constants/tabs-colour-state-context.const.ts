import { type Context, createContext } from "react";

import type { TabsColourState } from "../types/tabs-colour-state.type";

/**
 * Context to provide {@link TabsColourState}
 */
export const TABS_COLOUR_STATE_CONTEXT: Context<TabsColourState | null> = createContext<TabsColourState | null>(null);
