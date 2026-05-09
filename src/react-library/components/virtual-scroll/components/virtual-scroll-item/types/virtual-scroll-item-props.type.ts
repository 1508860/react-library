import type { IChild, IChildProps, IId, IIndex, ISize } from "@react-library/common";

import type {
	VirtualScrollItemChild,
	VirtualScrollItemChildProps
} from "../../../types/virtual-scroll-item-child.type";
import type { VirtualScrollItemId } from "../../../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemIndex } from "../../../types/virtual-scroll-item-index.type";
import type { VirtualScrollItemSize } from "../../../types/virtual-scroll-item-size.type";

/**
 * Props for virtual scroll item component
 */
export type VirtualScrollItemProps<TChildProps extends VirtualScrollItemChildProps> = (
	IId<VirtualScrollItemId> &
	IChild<VirtualScrollItemChild<TChildProps>> &
	IChildProps<TChildProps> &
	IIndex<VirtualScrollItemIndex> &
	Partial<ISize<VirtualScrollItemSize>>
);
