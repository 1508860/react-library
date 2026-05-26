import type { TabsPropsItemBadge } from "./tabs-props-item-badge.type";
import type { TabsPropsItemIcon } from "./tabs-props-item-icon.type";
import type { TabsPropsItemId } from "./tabs-props-item-id.type";
import type { TabsPropsItemLabel } from "./tabs-props-item-label.type";
import type { TabsPropsItemOnValueChange } from "./tabs-props-item-on-value-change.type";

type TabsItemBase = (
	TabsPropsItemBadge &
	TabsPropsItemId &
	TabsPropsItemLabel &
	TabsPropsItemOnValueChange
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
	TabsItemBase &
	TabsPropsItemIcon
);

/**
 * Describes a collection of {@link TabsItemWithIcon}
 */
export type TabsItemsWithIcon = Array<TabsItemWithIcon>;
