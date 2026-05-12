import { VIRTUAL_SCROLL_ITEM_REGISTER_CALLBACKS_CONTEXT } from "../../constants/virtual-scroll-item-register-callbacks-context.const";
import { VIRTUAL_SCROLL_ITEMS_CONTEXT } from "../../constants/virtual-scroll-items-context.const";
import { useVirtualScrollItemRegisterState } from "../../hooks/virtual-scroll-item-register-state.hook";

import type { VirtualScrollItemsProviderProps } from "./types/virtual-scroll-items-provider-props.type";

/**
 * Virtual scroll items provider component
 * Used to provide contexts for registering elements to be rendered in virtual scroll items
 * @param props
 */
export function VirtualScrollItemsProvider(props: VirtualScrollItemsProviderProps) {

	const { itemRegister, items } = useVirtualScrollItemRegisterState();

	return (
		<VIRTUAL_SCROLL_ITEM_REGISTER_CALLBACKS_CONTEXT value={itemRegister}>
			<VIRTUAL_SCROLL_ITEMS_CONTEXT value={items}>
				{props.children}
			</VIRTUAL_SCROLL_ITEMS_CONTEXT>
		</VIRTUAL_SCROLL_ITEM_REGISTER_CALLBACKS_CONTEXT>
	);
}
