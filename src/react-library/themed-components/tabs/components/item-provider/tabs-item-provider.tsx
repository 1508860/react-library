import { TABS_ITEM_IS_ACTIVE_CONTEXT } from "../../constants/tabs-item-is-active-context.const";
import { useTabsItemIsActiveState } from "../../hooks/tabs-item-is-active-state.hook";

import type { TabsItemProviderProps } from "./types/tabs-item-provider-props.type";

/**
 * Tabs item provider component
 */
export function TabsItemProvider(props: TabsItemProviderProps) {

	// Is active
	const isActive = useTabsItemIsActiveState(props.id);

	return (
		<TABS_ITEM_IS_ACTIVE_CONTEXT value={isActive}>
			{props.children}
		</TABS_ITEM_IS_ACTIVE_CONTEXT>
	);
}
