import { type Context, createContext } from "react";

import type { IFont } from "./font.interface";

/**
 * Context to provide {@link CurrencyCode}
 */
export const FONT_CONTEXT: Context<IFont | null> = createContext<IFont | null>(null);
