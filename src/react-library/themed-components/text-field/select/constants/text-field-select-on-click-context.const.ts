import { type Context, createContext } from "react";

import type { TextFieldSelectOnClick } from "../types/text-field-select-on-click.type";

/**
 * Context to provide text field select on click event
 */
export const TEXT_FIELD_SELECT_ON_CLICK_CONTEXT: Context<TextFieldSelectOnClick | null> = createContext<TextFieldSelectOnClick | null>(null);
