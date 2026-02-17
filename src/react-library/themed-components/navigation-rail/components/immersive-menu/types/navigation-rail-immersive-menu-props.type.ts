import type {
	IExpandedMenuWidth,
	IIsExpanded,
	IMenuStyle,
	INavigationHeaderChild,
	IOnExpandedChange
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailHeaderContainerChildren } from "../../../types/navigation-rail-header-container-children.type";
import type { NavigationRailMenuExpandedWidth } from "../../../types/navigation-rail-menu-expanded-width.type";

/**
 * Props for a navigation rail immersive menu
 */
export type NavigationRailImmersiveMenuProps = (
	IExpandedMenuWidth<NavigationRailMenuExpandedWidth> &
	IIsExpanded &
	IMenuStyle<NavigationRailMenuStyle> &
	Partial<INavigationHeaderChild<NavigationRailHeaderContainerChildren>> &
	IOnExpandedChange<boolean, void>
);
