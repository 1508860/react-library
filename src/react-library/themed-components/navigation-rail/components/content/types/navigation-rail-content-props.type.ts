import type {
	IChild,
	IIsExpanded,
	IItemId,
	IOnChange,
	IStyle,
	PrefixKeys
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailChildren } from "../../../types/navigation-rail-children.type";
import type { NavigationRailItemId } from "../../../types/navigation-rail-item-id.type";

/**
 * Props for a navigation rail content
 */
export type NavigationRailContentProps<TItemId extends NavigationRailItemId> = (
	IChild<NavigationRailChildren<TItemId>> &
	PrefixKeys<IItemId<TItemId>, "active"> &
	IIsExpanded &
	PrefixKeys<IOnChange<boolean, void>, "expanded"> &
	PrefixKeys<IStyle<NavigationRailMenuStyle>, "menu">
);
