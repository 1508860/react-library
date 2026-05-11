import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_ITEM_REGISTER_CALLBACKS_CONTEXT } from "../constants/virtual-scroll-item-register-callbacks-context.const";
import type { VirtualScrollItemRegisterCallbacks } from "../types/virtual-scroll-item-register.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_ITEM_REGISTER_CALLBACKS_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollItemRegisterCallbacksContext(): VirtualScrollItemRegisterCallbacks {
	const result = useContext(VIRTUAL_SCROLL_ITEM_REGISTER_CALLBACKS_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
