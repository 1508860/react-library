import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TABS_ITEM_IS_ACTIVE_CONTEXT } from "../constants/tabs-item-is-active-context.const";

/**
 * Returns context for {@link TABS_ITEM_IS_ACTIVE_CONTEXT} and ensures a non-null value
 */
export function useTabsItemIsActiveContext(): boolean {
	const result = useContext(TABS_ITEM_IS_ACTIVE_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
