import { type Context, createContext } from "react";

/**
 * Context to provide hover layer is disabled state
 */
export const HOVER_LAYER_IS_DISABLED_CONTEXT: Context<boolean | null> =
	createContext<boolean | null>(null);
