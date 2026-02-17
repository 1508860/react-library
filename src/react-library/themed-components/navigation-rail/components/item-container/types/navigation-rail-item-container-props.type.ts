import type { IActiveItemId, IOnChange, IOrientation, Orientation } from "@react-library/common";

import type { NavigationRailItemId } from "../../../types/navigation-rail-item-id.type";
import type { NavigationRailItem } from "../../../types/navigation-rail-item.type";

/**
 * Props for a navigation rail item container
 */
export type NavigationRailItemContainerProps<TItemId extends NavigationRailItemId> = (
	IActiveItemId<TItemId> &
	NavigationRailItem<TItemId> &
	IOnChange<TItemId, void> &
	IOrientation<Orientation>
);
