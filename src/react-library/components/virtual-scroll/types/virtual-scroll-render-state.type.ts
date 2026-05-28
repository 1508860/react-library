import type { IIndexesInView, IItemsInView, ISize } from "@react-library/common";

import type { VirtualScrollContentSize } from "./virtual-scroll-content-size.type";
import type { VirtualScrollIndexesInView } from "./virtual-scroll-index-in-view.type";
import type { VirtualScrollItems } from "./virtual-scroll-item.type";

/**
 * Virtual scroll render state
 */
export type VirtualScrollRenderState<TChildProps> = (
	IIndexesInView<VirtualScrollIndexesInView> &
	IItemsInView<VirtualScrollItems<TChildProps>> &
	ISize<VirtualScrollContentSize>
);
