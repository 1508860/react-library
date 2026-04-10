import type { IItemsInView, ISize } from "@react-library/common";

import type { VirtualScrollContentSize } from "../../../types/virtual-scroll-content-size.type";
import type { VirtualScrollItemsInView } from "../../../types/virtual-scroll-items-in-view.type";

/**
 * Virtual scroll render state
 */
export type VirtualScrollRenderState = (
	IItemsInView<VirtualScrollItemsInView> &
	ISize<VirtualScrollContentSize>
);
