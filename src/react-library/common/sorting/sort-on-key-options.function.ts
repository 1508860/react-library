import { applySortOrder } from "./sort-order.function";
import type { SortOnKeyOption } from "./sort-on-key-option.type";
import { SortOrder } from "./sort-order.type";

/**
 * Sort array on a key from type {@link T}
 * @param array to sort
 * @param sortOptions array of options to sort array on in the order provided
 */
export function sortOnKeyOptions<T>(array: T[], sortOptions: SortOnKeyOption<T>[]): T[] {

	// Validate parameters
	if (!array || array.length === 0 || !sortOptions || sortOptions.length === 0) return array;

	return [...array].sort((element1, element2) => {

		// Loop through keys (in order) for each element to determine 
		for (const sortOption of sortOptions) {

			if (!sortOption) continue;

			// No order change required for current key in element
			if (element1[sortOption.key] === element2[sortOption.key]) continue;

			// Determine if element 1 or 2 are null or undefined
			const isElement1Valid: boolean = (element1[sortOption.key] !== undefined && element1[sortOption.key] !== null);
			const isElement2Valid: boolean = (element2[sortOption.key] !== undefined && element2[sortOption.key] !== null);

			// Handle undefined / null values as less than a non undefined / null value
			if (isElement1Valid && !isElement2Valid) return applySortOrder(SortOrder.Ascending, sortOption.sortOrder);
			if (!isElement1Valid && isElement2Valid) return applySortOrder(SortOrder.Descending, sortOption.sortOrder);

			// Determine order elements should be sorted based on by comparison
			return applySortOrder((element1[sortOption.key] > element2[sortOption.key] ? SortOrder.Ascending : SortOrder.Descending), sortOption.sortOrder);
		}

		// No order change required for element
		return 0;
	});
}
