import type { IIndex, ISize } from "@react-library/common";

import type { VirtualScrollItemId } from "./virtual-scroll-item-id.type";
import type { VirtualScrollItemIndex } from "./virtual-scroll-item-index.type";
import type { VirtualScrollItemSize } from "./virtual-scroll-item-size.type";

/**
 * Virtual scroll items in view map with {@link VirtualScrollItemMapValue} against a {@link VirtualScrollItemId}
 */
export type VirtualScrollItemMap = Map<VirtualScrollItemId, VirtualScrollItemMapValue>;

/**
 * Virtual scroll item map value type
 */
export type VirtualScrollItemMapValue = (
	IIndex<VirtualScrollItemIndex> &
	ISize<VirtualScrollItemSize>
);
