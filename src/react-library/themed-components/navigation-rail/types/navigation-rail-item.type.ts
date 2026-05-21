import type {
	ArrayMaxLength7,
	ArrayMinLength2,
	IBadgeLabel,
	IIconName,
	IItemId,
	ILabel,
	IShowBadge
} from "@react-library/common";
import type { MaterialIconName } from "@react-library/material-icons";

import type { BadgeLabel } from "../../badge";

import type { NavigationRailItemId } from "../enums/navigation-rail-item-id-style.type";

/**
 * Type for a navigation rail item
 */
export type NavigationRailItem = (
	Partial<IBadgeLabel<BadgeLabel>> &
	IIconName<MaterialIconName> &
	IItemId<NavigationRailItemId> &
	ILabel<string> &
	IShowBadge
);

/**
 * Defines collection of {@link NavigationRailItem}
 */
export type NavigationRailItems = (
	ArrayMinLength2<NavigationRailItem> &
	ArrayMaxLength7<NavigationRailItem>
);
