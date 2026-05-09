import { MENU_SELECTED_IDS_CONTEXT } from "../shared/constants/menu-selected-ids-context.const";

import type { MenuSelectedItemsProviderProps } from "./types/menu-selected-items-provider-props.type";

/**
 * Menu selected items provider component
 */
export function MenuSelectedItemsProvider(props: MenuSelectedItemsProviderProps) {
	return (
		<MENU_SELECTED_IDS_CONTEXT value={props.selectedIds}>
			{props.children}
		</MENU_SELECTED_IDS_CONTEXT>
	);
}
