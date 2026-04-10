import type { IItemRegister, IItemsInView, IItemUnregister, ISize } from "@react-library/common";

import type { VirtualScrollContentSize } from "../../../types/virtual-scroll-content-size.type";
import type { VirtualScrollItemRegister } from "../../../types/virtual-scroll-item-register.type";
import type { VirtualScrollItemsInView } from "../../../types/virtual-scroll-items-in-view.type";
import type { VirtualScrollItemUnregister } from "../../../types/virtual-scroll-item-unregister.type";


/**
 * Describes the state of the content for the virtual scroll
 * including size, a item register & unregister callback and the set of items in the view to render
 */
export type VirtualScrollContentState = (
	IItemRegister<VirtualScrollItemRegister> &
	IItemsInView<VirtualScrollItemsInView> &
	IItemUnregister<VirtualScrollItemUnregister> &
	ISize<VirtualScrollContentSize>
);
