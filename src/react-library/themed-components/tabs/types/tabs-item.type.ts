import type {
	Callback,
	IBadgeLabel,
	IIconName,
	IId,
	ILabel,
	IOnValueChange,
	IShowBadge
} from "@react-library/common";

import type { BadgeLabel } from "../../badge";

import type { TabsItemId } from "./tabs-item-id.type";
import type { MaterialIconName } from "@react-library/material-icons";

export type TabsItemBase = (
	Partial<IBadgeLabel<BadgeLabel>> &
	IId<TabsItemId> &
	ILabel<string> &
	IOnValueChange<Callback<void>> &
	IShowBadge
);

/**
 * Describes the tabs component's item props for default content
 */
export type TabsItemDefault = (
	TabsItemBase
);

/**
 * Describes a collection of {@link TabsItemDefault}
 */
export type TabsItemsDefault = Array<TabsItemDefault>;

/**
 * Describes the tabs component's item props for content with an icon
 */
export type TabsItemWithIcon = (
	IIconName<MaterialIconName> &
	TabsItemBase
);

/**
 * Describes a collection of {@link TabsItemWithIcon}
 */
export type TabsItemsWithIcon = Array<TabsItemWithIcon>;
