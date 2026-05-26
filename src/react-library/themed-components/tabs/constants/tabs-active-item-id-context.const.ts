import { type Context, createContext } from "react";

import type { TabsItemId } from "../types/tabs-item-id.type";

/**
 * Context to provide {@link TabsItemId}
 */
export const TABS_ACTIVE_ITEM_ID_CONTEXT: Context<TabsItemId | null> = createContext<TabsItemId | null>(null);
