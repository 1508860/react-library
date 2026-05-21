import type { CallbackWithParameter, IActiveItemId, IOnChange, IOrientation, Orientation } from "@react-library/common";

import type { NavigationRailItemId } from "../../../enums/navigation-rail-item-id-style.type";
import type { NavigationRailItem } from "../../../types/navigation-rail-item.type";

/**
 * Props for a navigation rail item container
 */
export type NavigationRailItemContainerProps = (
	IActiveItemId<NavigationRailItemId> &
	NavigationRailItem &
	IOnChange<CallbackWithParameter<NavigationRailItemId, void>> &
	IOrientation<Orientation>
);
