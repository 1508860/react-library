import type { IIsExpanded, IOnChange, IStyle, IWidth, PrefixKeys } from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailMenuExpandedWidth } from "../../../types/navigation-rail-menu-expanded-width.type";

/**
 * Props for a navigation rail menu icon
 */
export type NavigationRailMenuIconProps = (
	IIsExpanded &
	IOnChange<boolean, void> &
	PrefixKeys<IStyle<NavigationRailMenuStyle>, "menu"> &
	PrefixKeys<IWidth<NavigationRailMenuExpandedWidth>, "expandedMenu">
);
