import type {
	ArrayMaxLength5,
	ArrayMinLength2,
	IBadgeLabel,
	IIconName,
	IItemId,
	ILabel,
	IShowBadge
} from "@react-library/common";
import type { MaterialIconName } from "@react-library/material-icons";

import type { BadgeLabel } from "../../badge";

import type { NavigationBarItemId } from "../enums/navigation-bar-item-id.type";

/**
 * Type for a navigation bar item
 */
export type NavigationBarItem = (
	Partial<IBadgeLabel<BadgeLabel>> &
	IIconName<MaterialIconName> &
	IItemId<NavigationBarItemId> &
	ILabel<string> &
	IShowBadge
);

/**
 * Type for collection of {@link NavigationBarItem}
 */
export type NavigationBarItems = (
	ArrayMinLength2<NavigationBarItem> &
	ArrayMaxLength5<NavigationBarItem>
);
