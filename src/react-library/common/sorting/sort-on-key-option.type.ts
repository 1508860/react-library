import type { IKey, ISortOrder } from "../interfaces";
import { SortOrder } from "./sort-order.type";

/**
 * Options for sorting an array of type {@link T} on a key in a {@link SortOrder}
 */
export type SortOnKeyOption<T> = (
	IKey<keyof T> &
	ISortOrder<SortOrder>
);
