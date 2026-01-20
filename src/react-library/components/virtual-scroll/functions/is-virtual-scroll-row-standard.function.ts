import type { VirtualScrollRow } from "../enums/virtual-scroll-row.type";
import type { VirtualScrollRowComparable } from "../types/virtual-scroll-row.type";

/**
 * Function to determine if virtual scroll row is standard
 */
export function isVirtualSCrollRowStandard(row: VirtualScrollRowComparable<VirtualScrollRow>): boolean {
	return row.virtualScrollRowType === undefined;
}
