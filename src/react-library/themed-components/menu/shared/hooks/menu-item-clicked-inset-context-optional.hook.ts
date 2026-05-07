import { useContext } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

import { MENU_ITEM_CLICKED_INSET_CONTEXT } from "../constants/menu-item-clicked-inset-context.const";

/**
 * Returns context for {@link MENU_ITEM_CLICKED_INSET_CONTEXT} and allows a null value if not provided
 */
export function useMenuItemClickedInsetContextOptional(): TransitionPulseInsetData | null {
	const result = useContext(MENU_ITEM_CLICKED_INSET_CONTEXT);
	return result;
};
