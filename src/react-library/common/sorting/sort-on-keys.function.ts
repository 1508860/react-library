import type { SortOnKeyOption } from "./sort-on-key-option.type";
import { sortOnKeyOptions } from "./sort-on-key-options.function";
import { SortOrder } from "./sort-order.type";

/**
 * Sort array on a key from type {@link T}
 * @param array to sort
 * @param keys keys to sort {@link array} by
 * @param sortOrder direction to sort {@link array} by. See {@link SortOrder}
 */
export function sortOnKeys<T>(array: T[], keys: Array<keyof T>, sortOrder: SortOrder): T[] {

	const sortOptions: SortOnKeyOption<T>[] = keys.map(key => ({
		key: key,
		sortOrder: sortOrder
	}));

	return sortOnKeyOptions<T>(array, sortOptions);
}
