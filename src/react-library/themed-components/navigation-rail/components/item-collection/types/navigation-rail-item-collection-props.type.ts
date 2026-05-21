import type {
	CallbackWithParameter,
	IActiveItemId,
	ICenterItems,
	IIsExpanded,
	IItems,
	IMenuStyle,
	IOnItemChange
} from "@react-library/common";

import type { NavigationRailItemId } from "../../../enums/navigation-rail-item-id-style.type";
import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailItems } from "../../../types/navigation-rail-item.type";

/**
 * Props for a navigation rail item collection
 */
export type NavigationRailItemCollectionProps = (
	IActiveItemId<NavigationRailItemId> &
	ICenterItems<boolean> &
	IIsExpanded &
	IItems<NavigationRailItems> &
	IMenuStyle<NavigationRailMenuStyle> &
	IOnItemChange<CallbackWithParameter<NavigationRailItemId, void>>
);
