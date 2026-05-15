import { type Context, createContext } from "react";

import type { TextFieldSelectRef } from "../types/text-field-select-ref.type";

/**
 * Context to provide a text field select ref
 */
export const TEXT_FIELD_SELECT_REF_CONTEXT: Context<TextFieldSelectRef | null> = createContext<TextFieldSelectRef | null>(null);
