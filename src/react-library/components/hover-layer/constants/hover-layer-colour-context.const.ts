import { type Context, createContext } from "react";

import type { Colour } from "@react-library/common";

/**
 * Context to provide hover layer colour
 */
export const HOVER_LAYER_COLOUR_CONTEXT: Context<Colour | null> = createContext<Colour | null>(null);
