import { type Context, createContext } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

/**
 * Context to provide button clicked inset
 */
export const BUTTON_CLICKED_INSET_CONTEXT: Context<TransitionPulseInsetData | null> = createContext<TransitionPulseInsetData | null>(null);
