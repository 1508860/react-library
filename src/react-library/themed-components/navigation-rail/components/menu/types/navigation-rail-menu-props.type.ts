import type {
	CallbackWithParameter,
	IActiveItemId,
	ICenterItems,
	IExpandedMenuWidth,
	IIsExpanded,
	IItems,
	IMenuStyle,
	INavigationHeaderChild,
	IOnExpandedChange,
	IOnItemChange
} from "@react-library/common";

import type { NavigationRailItemId } from "../../../enums/navigation-rail-item-id-style.type";
import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailHeaderContainerChildren } from "../../../types/navigation-rail-header-container-children.type";
import type { NavigationRailItems } from "../../../types/navigation-rail-item.type";
import type { NavigationRailMenuExpandedWidth } from "../../../types/navigation-rail-menu-expanded-width.type";

/**
 * Props for a navigation rail menu
 */
export type NavigationRailMenuProps = (
	IActiveItemId<NavigationRailItemId> &
	ICenterItems<boolean> &
	IExpandedMenuWidth<NavigationRailMenuExpandedWidth> &
	IIsExpanded &
	IItems<NavigationRailItems> &
	IMenuStyle<NavigationRailMenuStyle> &
	Partial<INavigationHeaderChild<NavigationRailHeaderContainerChildren>> &
	IOnExpandedChange<CallbackWithParameter<boolean, void>> &
	IOnItemChange<CallbackWithParameter<NavigationRailItemId, void>>
);
