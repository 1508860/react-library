import type { IItemsInView, ISize } from "@react-library/common";

import type { VirtualScrollItemsInView } from "../../../types/virtual-scroll-items-in-view.type";

import type { VirtualScrollContentSize } from "./virtual-scroll-content-size.type";

/**
 * Virtual scroll render state
 */
export type VirtualScrollRenderState = (
	IItemsInView<VirtualScrollItemsInView> &
	ISize<VirtualScrollContentSize>
);
