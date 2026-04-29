import { type Context, createContext } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

/**
 * Context to provide radio button clicked inset
 */
export const RADIO_BUTTON_CLICKED_INSET_CONTEXT: Context<TransitionPulseInsetData | null> = createContext<TransitionPulseInsetData | null>(null);
