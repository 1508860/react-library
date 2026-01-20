import { applySortOrder } from "./sort-order.function";
import { SortOrder } from "./sort-order.type";

/**
 * Sort array on a key from type {@link T}
 * @param array to sort
 * @param key key to sort {@link array} by
 * @param sortOrder direction to sort {@link array} by. See {@link SortOrder}
 */
export function sortOnKey<T>(array: T[], key: keyof T, sortOrder: SortOrder): T[] {

	// Validate parameters
	if (!array || array.length === 0) return array;

	return [...array].sort((element1, element2) => {

		// No order change required
		if (element1[key] === element2[key]) return 0;

		// Determine if element 1 or 2 are null or undefined
		const isElement1Valid: boolean = (element1[key] !== undefined && element1[key] !== null);
		const isElement2Valid: boolean = (element2[key] !== undefined && element2[key] !== null);

		// Handle undefined / null values as less than a non undefined / null value
		if (isElement1Valid && !isElement2Valid) return applySortOrder(SortOrder.Ascending, sortOrder);
		if (!isElement1Valid && isElement2Valid) return applySortOrder(SortOrder.Descending, sortOrder);

		// Determine order elements should be sorted based on by comparison
		return applySortOrder((element1[key] > element2[key] ? SortOrder.Ascending : SortOrder.Descending), sortOrder);
	});
}
