import { type Context, createContext } from "react";

import type { Colour } from "@react-library/common";

/**
 * Context to provide Transition pulse colour
 */
export const TRANSITION_PULSE_COLOUR_CONTEXT: Context<Colour | null> = createContext<Colour | null>(null);
