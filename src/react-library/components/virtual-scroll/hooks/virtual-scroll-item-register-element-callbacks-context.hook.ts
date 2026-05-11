import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_ITEM_REGISTER_ELEMENT_CALLBACKS_CONTEXT } from "../constants/virtual-scroll-item-register-element-callbacks-context.const";
import type { VirtualScrollItemRegisterElementCallbacks } from "../types/virtual-scroll-item-register-element.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_ITEM_REGISTER_ELEMENT_CALLBACKS_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollItemRegisterElementCallbacksContext(): VirtualScrollItemRegisterElementCallbacks {
	const result = useContext(VIRTUAL_SCROLL_ITEM_REGISTER_ELEMENT_CALLBACKS_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
