import { type Context, createContext } from "react";

import type { TextFieldOnClick } from "../types/text-field-on-click.type";

/**
 * Context to provide text field on click event
 */
export const TEXT_FIELD_ON_CLICK_CONTEXT: Context<TextFieldOnClick | null> = createContext<TextFieldOnClick | null>(null);
