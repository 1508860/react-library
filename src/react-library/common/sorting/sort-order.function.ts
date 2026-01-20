import { SortOrder } from "./sort-order.type";

/**
 * Apply sort order to a numerical sort value based on {@link SortOrder}
 * @param sortValue numerical value to indicate the relative order of two elements
 * @param sortOrder direction to sort {@link SortOrder}
 * @returns 
 */
export function applySortOrder(currentOrder: SortOrder, sortOrder: SortOrder): number {
	return sortOrder === SortOrder.Descending ? currentOrder * -1 : currentOrder;
}
