import { useContext } from "react";

import { MENU_SELECTED_IDS_CONTEXT } from "../constants/menu-selected-ids-context.const";
import type { MenuSelectedIds } from "../types/menu-props-selected-ids.type";

/**
 * Returns context for {@link MENU_SELECTED_IDS_CONTEXT} and allows a null value if not provided
 */
export function useMenuSelectedIdsContextOptional(): MenuSelectedIds | null {
	const result = useContext(MENU_SELECTED_IDS_CONTEXT);
	return result;
};
