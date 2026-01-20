import { type Context, createContext } from "react";

import type { IColourScheme } from "../interfaces/colour-scheme.interface";

/**
 * Context to provide {@link CurrencyCode}
 */
export const COLOUR_SCHEME_CONTEXT: Context<IColourScheme | null> = createContext<IColourScheme | null>(null);
