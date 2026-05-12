import { type Context, createContext } from "react";

import type { ScrollColour } from "../../scroll";

/**
 * Context to provide the colour state for the virtual scroll scrollbar
 */
export const THEMED_VIRTUAL_SCROLL_COLOUR_CONTEXT: Context<ScrollColour | null> = createContext<ScrollColour | null>(null);
