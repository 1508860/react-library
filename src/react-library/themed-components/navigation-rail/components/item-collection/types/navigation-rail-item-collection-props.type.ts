import type {
	ICenter,
	IChild,
	IIsExpanded,
	IItemId,
	IOnChange,
	IStyle,
	PrefixKeys,
	SuffixKeys
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailChildren } from "../../../types/navigation-rail-children.type";
import type { NavigationRailItemId } from "../../../types/navigation-rail-item-id.type";

/**
 * Props for a navigation rail item collection
 */
export type NavigationRailItemCollectionProps<TItemId extends NavigationRailItemId> = (
	SuffixKeys<ICenter<boolean>, "Items"> &
	IChild<NavigationRailChildren<TItemId>> &
	IIsExpanded &
	PrefixKeys<IItemId<TItemId>, "active"> &
	PrefixKeys<IOnChange<TItemId, void>, "item"> &
	PrefixKeys<IStyle<NavigationRailMenuStyle>, "menu">
);
