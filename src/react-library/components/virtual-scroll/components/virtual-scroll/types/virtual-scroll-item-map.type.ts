import type { IIndex, ISize } from "@react-library/common";

import type { VirtualScrollItemId } from "../../../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemIndex } from "../../../types/virtual-scroll-item-index.type";
import type { VirtualScrollItemSize } from "../../../types/virtual-scroll-item-size.type";

/**
 * Virtual scroll items in view map with {@link VirtualScrollItemMapValue} against a {@link VirtualScrollItemId}
 */
export type VirtualScrollItemMap = Map<VirtualScrollItemId, VirtualScrollItemMapValue>;

/**
 * Virtual scroll item map value type
 */
export type VirtualScrollItemMapValue = (
	ISize<VirtualScrollItemSize> &
	IIndex<VirtualScrollItemIndex>
);
