import type {
	IActiveItemId,
	ICenterItems,
	IChild,
	IExpandedMenuWidth,
	IIsExpanded,
	IMenuStyle,
	INavigationHeaderChild,
	IOnExpandedChange,
	IOnItemChange
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailChildren } from "../../../types/navigation-rail-children.type";
import type { NavigationRailHeaderContainerChildren } from "../../../types/navigation-rail-header-container-children.type";
import type { NavigationRailItemId } from "../../../types/navigation-rail-item-id.type";
import type { NavigationRailMenuExpandedWidth } from "../../../types/navigation-rail-menu-expanded-width.type";

/**
 * Props for a navigation rail menu
 */
export type NavigationRailMenuProps<TItemId extends NavigationRailItemId> = (
	IActiveItemId<TItemId> &
	ICenterItems<boolean> &
	IChild<NavigationRailChildren<TItemId>> &
	IExpandedMenuWidth<NavigationRailMenuExpandedWidth> &
	IIsExpanded &
	IMenuStyle<NavigationRailMenuStyle> &
	Partial<INavigationHeaderChild<NavigationRailHeaderContainerChildren>> &
	IOnExpandedChange<boolean, void> &
	IOnItemChange<TItemId, void>
);
