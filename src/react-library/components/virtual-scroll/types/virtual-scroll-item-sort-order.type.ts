import type { ArrayMaxLength5, ArrayMinLength1 } from "@react-library/common";

/**
 * Virtual scroll item sort order
 */
export type VirtualScrollItemSortOrder = (
	ArrayMinLength1<number> &
	ArrayMaxLength5<number>
);
