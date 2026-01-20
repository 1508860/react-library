import type { PrefixKeys, IItemId, IOnChange, Orientation, IOrientation } from "@react-library/common";

import type { NavigationRailItemId } from "../../../types/navigation-rail-item-id.type";
import type { NavigationRailItem } from "../../../types/navigation-rail-item.type";

/**
 * Props for a navigation rail item container
 */
export type NavigationRailItemContainerProps<TItemId extends NavigationRailItemId> = (
	PrefixKeys<IItemId<TItemId>, "active"> &
	NavigationRailItem<TItemId> &
	IOnChange<TItemId, void> &
	IOrientation<Orientation>
);
