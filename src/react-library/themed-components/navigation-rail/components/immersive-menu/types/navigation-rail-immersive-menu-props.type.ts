import type {
	IChild,
	IIsExpanded,
	IOnChange,
	IStyle,
	IWidth,
	PrefixKeys
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailHeaderContainerChildren } from "../../../types/navigation-rail-header-container-children.type";
import type { NavigationRailMenuExpandedWidth } from "../../../types/navigation-rail-menu-expanded-width.type";

/**
 * Props for a navigation rail immersive menu
 */
export type NavigationRailImmersiveMenuProps = (
	Partial<PrefixKeys<IChild<NavigationRailHeaderContainerChildren>, "navigationHeader">> &
	IIsExpanded &
	PrefixKeys<IOnChange<boolean, void>, "expanded"> &
	PrefixKeys<IStyle<NavigationRailMenuStyle>, "menu"> &
	PrefixKeys<IWidth<NavigationRailMenuExpandedWidth>, "expandedMenu">
);
