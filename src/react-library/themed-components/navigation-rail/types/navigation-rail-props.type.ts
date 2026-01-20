import type {
	ICenter,
	IChild,
	IIsExpanded,
	IItemId,
	IOnChange,
	IStyle,
	IWidth,
	PrefixKeys,
	SuffixKeys
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../enums/navigation-rail-menu-style.type";
import type { NavigationRailChildren } from "./navigation-rail-children.type";
import type { NavigationRailHeaderContainerChildren } from "./navigation-rail-header-container-children.type";
import type { NavigationRailItemId } from "./navigation-rail-item-id.type";
import type { NavigationRailMenuExpandedWidth } from "./navigation-rail-menu-expanded-width.type";

/**
 * Props for a navigation rail
 */
export type NavigationRailProps<TItemId extends NavigationRailItemId> = (
	SuffixKeys<ICenter<boolean>, "Items"> &
	IChild<NavigationRailChildren<TItemId>> &
	Partial<PrefixKeys<IChild<NavigationRailHeaderContainerChildren>, "navigationHeader">> &
	IIsExpanded &
	PrefixKeys<IItemId<TItemId>, "active"> &
	PrefixKeys<IOnChange<boolean, void>, "expanded"> &
	PrefixKeys<IOnChange<TItemId, void>, "item"> &
	PrefixKeys<IStyle<NavigationRailMenuStyle>, "menu"> &
	PrefixKeys<IWidth<NavigationRailMenuExpandedWidth>, "expandedMenu">
);
