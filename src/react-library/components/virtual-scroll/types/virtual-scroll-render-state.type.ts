import type { IItemsInView, ISize } from "@react-library/common";

import type { VirtualScrollContentSize } from "./virtual-scroll-content-size.type";
import type { VirtualScrollItems } from "./virtual-scroll-item.type";

/**
 * Virtual scroll render state
 */
export type VirtualScrollRenderState<TChildProps> = (
	IItemsInView<VirtualScrollItems<TChildProps>> &
	ISize<VirtualScrollContentSize>
);
