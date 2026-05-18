import { type Context, createContext } from "react";

import type { TransitionPulseInsetDataContext } from "../types/transition-pulse-inset-data-context.type";

/**
 * Context to provide transition pulse inset data
 */
export const TRANSITION_PULSE_INSET_DATA_CONTEXT: Context<TransitionPulseInsetDataContext | null> =
	createContext<TransitionPulseInsetDataContext | null>(null);
