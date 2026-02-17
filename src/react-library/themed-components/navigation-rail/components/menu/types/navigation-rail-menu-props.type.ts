import type {
	ICenterItems,
	IChild,
	IIsExpanded,
	IItemId,
	IOnChange,
	IStyle,
	IWidth,
	PrefixKeys
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
	ICenterItems<boolean> &
	IChild<NavigationRailChildren<TItemId>> &
	Partial<PrefixKeys<IChild<NavigationRailHeaderContainerChildren>, "navigationHeader">> &
	IIsExpanded &
	PrefixKeys<IItemId<TItemId>, "active"> &
	PrefixKeys<IOnChange<boolean, void>, "expanded"> &
	PrefixKeys<IOnChange<TItemId, void>, "item"> &
	PrefixKeys<IStyle<NavigationRailMenuStyle>, "menu"> &
	PrefixKeys<IWidth<NavigationRailMenuExpandedWidth>, "expandedMenu">
);
