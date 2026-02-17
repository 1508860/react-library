import type {
	IActiveItemId,
	ICenterItems,
	IChild,
	IIsExpanded,
	IMenuStyle,
	IOnItemChange
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailChildren } from "../../../types/navigation-rail-children.type";
import type { NavigationRailItemId } from "../../../types/navigation-rail-item-id.type";

/**
 * Props for a navigation rail item collection
 */
export type NavigationRailItemCollectionProps<TItemId extends NavigationRailItemId> = (
	IActiveItemId<TItemId> &
	ICenterItems<boolean> &
	IChild<NavigationRailChildren<TItemId>> &
	IIsExpanded &
	IMenuStyle<NavigationRailMenuStyle> &
	IOnItemChange<TItemId, void>
);
