import { type Context, createContext } from "react";

import type { CheckboxSelectedState } from "../enums/checkbox-selected-state.type";

/**
 * Context to provide checkbox selected state
 */
export const CHECKBOX_SELECTED_STATE_CONTEXT: Context<CheckboxSelectedState | null> = createContext<CheckboxSelectedState | null>(null);
