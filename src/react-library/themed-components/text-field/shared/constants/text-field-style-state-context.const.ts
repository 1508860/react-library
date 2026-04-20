import { type Context, createContext } from "react";

import type { TextFieldStyleState } from "../enums/text-field-style-state.type";

/**
 * Context to provide {@link TextFieldStyleState}
 */
export const TEXT_FIELD_STYLE_STATE_CONTEXT: Context<TextFieldStyleState | null> = createContext<TextFieldStyleState | null>(null);
