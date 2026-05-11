import { VIRTUAL_SCROLL_ELEMENTS_IN_VIEW_CONTEXT } from "../../constants/virtual-scroll-elements-in-view-context.const";
import { VIRTUAL_SCROLL_ITEM_REGISTER_ELEMENT_CALLBACKS_CONTEXT } from "../../constants/virtual-scroll-item-register-element-callbacks-context.const";
import { useVirtualScrollItemElementsState } from "../../hooks/virtual-scroll-elements-state.hook";

import type { VirtualScrollElementsProviderProps } from "./types/virtual-scroll-elements-provider-props.type";

/**
 * Virtual scroll elements provider component
 * Used to provide contexts for registering elements to be rendered in virtual scroll items
 * @param props
 */
export function VirtualScrollElementsProvider(props: VirtualScrollElementsProviderProps) {

	const { elementsInView, itemRegister } = useVirtualScrollItemElementsState();

	return (
		<VIRTUAL_SCROLL_ITEM_REGISTER_ELEMENT_CALLBACKS_CONTEXT value={itemRegister}>
			<VIRTUAL_SCROLL_ELEMENTS_IN_VIEW_CONTEXT value={elementsInView}>
				{props.children}
			</VIRTUAL_SCROLL_ELEMENTS_IN_VIEW_CONTEXT>
		</VIRTUAL_SCROLL_ITEM_REGISTER_ELEMENT_CALLBACKS_CONTEXT>
	);
}
