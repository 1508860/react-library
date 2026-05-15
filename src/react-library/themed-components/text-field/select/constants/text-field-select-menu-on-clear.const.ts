import { type Context, createContext } from "react";

import type { TextFieldSelectMenuOnClear } from "../types/text-field-select-menu-on-clear.type";

/**
 * Context to provide text field select menu on clear event
 */
export const TEXT_FIELD_SELECT_MENU_ON_CLEAR_CONTEXT: Context<TextFieldSelectMenuOnClear | null> =
	createContext<TextFieldSelectMenuOnClear | null>(null);
