import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { MENU_ITEM_IS_HOVERED_CONTEXT } from "../constants/menu-item-is-hovered-context.const";

/**
 * Returns context for {@link MENU_ITEM_IS_HOVERED_CONTEXT} and ensures a non-null value
 */
export function useMenuItemIsHoveredContext(): boolean {
	const result = useContext(MENU_ITEM_IS_HOVERED_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
