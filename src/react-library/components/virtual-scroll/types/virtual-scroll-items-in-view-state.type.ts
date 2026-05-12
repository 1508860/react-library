import type { IItemsInView, ISize } from "@react-library/common";

import type { VirtualScrollContentSize } from "./virtual-scroll-content-size.type";
import type { VirtualScrollItemsInView } from "./virtual-scroll-items-in-view.type";

/**
 * Describes the state of the content for the virtual scroll
 * including size and the set of items in the view to render
 */
export type VirtualScrollItemsInViewState = (
	IItemsInView<VirtualScrollItemsInView> &
	ISize<VirtualScrollContentSize>
);
