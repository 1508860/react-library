import type { VirtualScrollItemId } from "../../../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemMap } from "../types/virtual-scroll-item-map.type";

/**
 * Function for an ordered array of {@link VirtualScrollItemId}
 * @param itemMap
 */
export function virtualScrollSort(itemMap: VirtualScrollItemMap): Array<VirtualScrollItemId> {
	return Array.from(itemMap)
		.sort(([, value1], [, value2]) => {

			const maxLength = Math.max(value1.index.length, value2.index.length);

			for (let currentIndex = 0; currentIndex < maxLength; currentIndex++) {
				const currentValue1 = value1.index[currentIndex];
				const currentValue2 = value2.index[currentIndex];

				if (currentValue1 === currentValue2) continue;
				if (currentValue1 === undefined && currentValue2 !== undefined) return -1;
				if (currentValue1 !== undefined && currentValue2 === undefined) return 1;
				return currentValue1 - currentValue2;
			}

			return 0;
		})
		.map((([id]) => id));
}
