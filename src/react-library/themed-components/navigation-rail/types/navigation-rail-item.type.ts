import type { ReactElement } from "react";

import type {
	IBadgeLabel,
	IElement,
	IIconName,
	IItemId,
	ILabel,
	IShowBadge
} from "@react-library/common";
import type { MaterialIconName } from "@react-library/material-icons";

import type { BadgeLabel } from "../../badge";

import type { NavigationRailItemId } from "./navigation-rail-item-id.type";

/**
 * Type for a navigation rail item
 */
export type NavigationRailItem<TItemId extends NavigationRailItemId> = (
	Partial<IBadgeLabel<BadgeLabel>> &
	IElement<() => ReactElement> &
	IIconName<MaterialIconName> &
	IItemId<TItemId> &
	ILabel<string> &
	IShowBadge
);
