import { type Context, createContext } from "react";

import type { TextFieldIsPopulatedState } from "../types/text-field-is-populated-state.type";


/**
 * Context to provide {@link TextFieldIsPopulatedState}
 */
export const TEXT_FIELD_IS_POPULATED_STATE_CONTEXT: Context<TextFieldIsPopulatedState | null> = createContext<TextFieldIsPopulatedState | null>(null);
