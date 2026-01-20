import { SortOrder } from "./sort-order.type";

/**
 * Options for sorting an array of type {@link T} on a key in a {@link SortOrder}
 */
export interface ISortOnKeyOption<T> {
	key: keyof T;
	sortOrder: SortOrder;
};
