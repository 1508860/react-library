import type { IChildrenSize, IPaddingEnd, IPaddingStart } from "@react-library/common";

import type { VirtualScrollItemSize } from "./virtual-scroll-item-size.type";

/**
 * Describes the size of the content for the virtual scroll
 * so that we can fill the scrollable space with padding and a children size
 */
export type VirtualScrollContentSize = (
	IChildrenSize<VirtualScrollItemSize> &
	IPaddingEnd<VirtualScrollItemSize> &
	IPaddingStart<VirtualScrollItemSize>
);
