import { useCallback } from "react";

import {
	useResolveState,
	type Callback
} from "@react-library/common";

import type { TabsItemId } from "../types/tabs-item-id.type";

import { useTabsActiveItemIdContext } from "./tabs-active-item-id-context.hook";

/**
 * Custom hook to resolve if an item id is active for the tabs component
 */
export function useTabsItemIsActiveState(id: TabsItemId): boolean {

	const activeItemId = useTabsActiveItemIdContext();

	const resolveState = useCallback<Callback<boolean>>(
		() => id === activeItemId,
		[id, activeItemId]
	);
	const state = useResolveState(resolveState);

	return state;
};
