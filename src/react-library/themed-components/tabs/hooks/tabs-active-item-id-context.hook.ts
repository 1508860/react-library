import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TABS_ACTIVE_ITEM_ID_CONTEXT } from "../constants/tabs-active-item-id-context.const";
import type { TabsItemId } from "../types/tabs-item-id.type";

/**
 * Returns context for {@link TABS_ACTIVE_ITEM_ID_CONTEXT} and ensures a non-null value
 */
export function useTabsActiveItemIdContext(): TabsItemId {
	const result = useContext(TABS_ACTIVE_ITEM_ID_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
