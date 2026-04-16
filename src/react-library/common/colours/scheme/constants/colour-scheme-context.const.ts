import { type Context, createContext } from "react";

import type { ColourScheme } from "../types/colour-scheme.type";

/**
 * Context to provide {@link ColourScheme}
 */
export const COLOUR_SCHEME_CONTEXT: Context<ColourScheme | null> = createContext<ColourScheme | null>(null);
