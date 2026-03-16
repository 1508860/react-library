import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_ITEM_REGISTER_CONTEXT } from "../constants/virtual-scroll-item-register-context.const";
import type { VirtualScrollItemRegister } from "../types/virtual-scroll-item-register.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_ITEM_REGISTER_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollItemRegisterContext(): VirtualScrollItemRegister {
	const result = useContext(VIRTUAL_SCROLL_ITEM_REGISTER_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
