import type { IItemRegister, IItems, IItemsInView, ISize } from "@react-library/common";

import type { VirtualScrollContentSize } from "./virtual-scroll-content-size.type";
import type { VirtualScrollItemRegisterCallbacks } from "./virtual-scroll-item-register.type";
import type { VirtualScrollItemMap } from "./virtual-scroll-item-map.type";
import type { VirtualScrollItemsInView } from "./virtual-scroll-items-in-view.type";


/**
 * Describes the state of the content for the virtual scroll
 * including size, a item register & unregister callback and the set of items in the view to render
 */
export type VirtualScrollContentState = (
	IItems<VirtualScrollItemMap> &
	IItemRegister<VirtualScrollItemRegisterCallbacks> &
	IItemsInView<VirtualScrollItemsInView> &
	ISize<VirtualScrollContentSize>
);
