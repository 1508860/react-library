import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { MENU_ITEM_COLOUR_STATE_CONTEXT } from "../constants/menu-item-colour-state-context.const";
import type { MenuItemColourState } from "../types/menu-item-colour-state.type";

/**
 * Returns context for {@link MENU_ITEM_COLOUR_STATE_CONTEXT} and ensures a non-null value
 */
export function useMenuItemColourStateContext(): MenuItemColourState {
	const result = useContext(MENU_ITEM_COLOUR_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
