import type { IChild, IChildProps, IId, ISize } from "@react-library/common";

import type { VirtualScrollItemChild } from "./virtual-scroll-item-child.type";
import type { VirtualScrollItemId } from "./virtual-scroll-item-id.type";
import type { VirtualScrollItemSize } from "./virtual-scroll-item-size.type";

/**
 * Virtual scroll item
*/
export type VirtualScrollItem<TChildProps> = (
	IId<VirtualScrollItemId> &
	Partial<ISize<VirtualScrollItemSize>> &
	IChild<VirtualScrollItemChild<TChildProps>> &
	IChildProps<TChildProps>
);

/**
 * Virtual scroll item collection
 */
export type VirtualScrollItems<TChildProps> = Array<VirtualScrollItem<TChildProps>>;
