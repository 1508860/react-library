import type { IExpandedMenuWidth, IIsExpanded, IMenuStyle, IOnChange } from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailMenuExpandedWidth } from "../../../types/navigation-rail-menu-expanded-width.type";

/**
 * Props for a navigation rail menu icon
 */
export type NavigationRailMenuIconProps = (
	IExpandedMenuWidth<NavigationRailMenuExpandedWidth> &
	IIsExpanded &
	IMenuStyle<NavigationRailMenuStyle> &
	IOnChange<boolean, void>
);
