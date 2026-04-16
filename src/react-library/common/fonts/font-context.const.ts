import { type Context, createContext } from "react";

import type { Font } from "./font.type";

/**
 * Context to provide {@link Font}
 */
export const FONT_CONTEXT: Context<Font | null> = createContext<Font | null>(null);
