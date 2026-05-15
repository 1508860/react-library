import { type Context, createContext } from "react";

import type { TextFieldSelectItemId } from "../types/text-field-select-item-id.type";
import type { TextFieldSelectMenuOnChange } from "../types/text-field-select-menu-on-change.type";

/**
 * Context to provide text field select menu on change event
 */
export const TEXT_FIELD_SELECT_MENU_ON_CHANGE_CONTEXT: Context<TextFieldSelectMenuOnChange<TextFieldSelectItemId> | null> =
	createContext<TextFieldSelectMenuOnChange<TextFieldSelectItemId> | null>(null);
