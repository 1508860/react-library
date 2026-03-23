import type { ArrayMaxLength5, ArrayMinLength1 } from "@react-library/common";

/**
 * Virtual scroll item index
 */
export type VirtualScrollItemIndex = (
	ArrayMinLength1<number> &
	ArrayMaxLength5<number>
);
