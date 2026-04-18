import { type Context, createContext } from "react";

import type { TextFieldColourState } from "../types/text-field-colour-state.type";

/**
 * Context to provide {@link TextFieldColourState}
 */
export const TEXT_FIELD_COLOUR_STATE_CONTEXT: Context<TextFieldColourState | null> = createContext<TextFieldColourState | null>(null);
