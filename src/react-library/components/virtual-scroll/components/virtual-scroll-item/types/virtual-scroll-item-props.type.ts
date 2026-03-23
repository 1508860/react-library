import type { IChild, IId, IIndex, ISize } from "@react-library/common";

import type { VirtualScrollItemChild } from "../../../types/virtual-scroll-item-child.type";
import type { VirtualScrollItemId } from "../../../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemIndex } from "../../../types/virtual-scroll-item-index.type";
import type { VirtualScrollItemSize } from "../../../types/virtual-scroll-item-size.type";

/**
 * Props for virtual scroll item component
 */
export type VirtualScrollItemProps = (
	IId<VirtualScrollItemId> &
	IChild<VirtualScrollItemChild> &
	IIndex<VirtualScrollItemIndex> &
	Partial<ISize<VirtualScrollItemSize>>
);
