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

import type { NavigationBarItemId } from "./navigation-bar-item-id.type";

/**
 * Type for a navigation bar item
 */
export type NavigationBarItem<TItemId extends NavigationBarItemId> = (
	Partial<IBadgeLabel<BadgeLabel>> &
	IElement<() => ReactElement> &
	IIconName<MaterialIconName> &
	IItemId<TItemId> &
	ILabel<string> &
	IShowBadge
);
