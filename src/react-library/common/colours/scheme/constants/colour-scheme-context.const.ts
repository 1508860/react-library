import { type Context, createContext } from "react";

import type { ColourScheme } from "../interfaces/colour-scheme.interface";

/**
 * Context to provide {@link CurrencyCode}
 */
export const COLOUR_SCHEME_CONTEXT: Context<ColourScheme | null> = createContext<ColourScheme | null>(null);
