import { type Context, createContext } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

/**
 * Context to provide checkbox clicked inset
 */
export const CHECKBOX_CLICKED_INSET_CONTEXT: Context<TransitionPulseInsetData | null> = createContext<TransitionPulseInsetData | null>(null);
