import type { IItemRegister, IItems } from "@react-library/common";

import type { VirtualScrollItemRegisterCallbacks } from "./virtual-scroll-item-register.type";
import type { VirtualScrollItemMap } from "./virtual-scroll-item-map.type";


/**
 * Describes the props used for contexts to handle registering virtual scroll items
 */
export type VirtualScrollItemRegisterState = (
	IItems<VirtualScrollItemMap> &
	IItemRegister<VirtualScrollItemRegisterCallbacks>
);
