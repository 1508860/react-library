import type { IItem } from "@react-library/common";

import type { TabsContent } from "../enums/tabs-content.type";

import type { TabsItemDefault, TabsItemWithIcon } from "./tabs-item.type";
import type { TabsPropsContent } from "./tabs-props-content.type";

/**
 * Describes the tabs component's props for default content
 */
export type TabsPropsContentItemDefault = (
	IItem<TabsItemDefault> &
	TabsPropsContent<typeof TabsContent.Default>
);

/**
 * Describes the tabs component's props for content with an icon
 */
export type TabsPropsContentWithIcon = (
	IItem<TabsItemWithIcon> &
	TabsPropsContent<typeof TabsContent.WithIcon>
);

/**
 * Describes the tabs component's props for all content types
 */
export type TabsPropsContentItemAll = (
	TabsPropsContentItemDefault |
	TabsPropsContentWithIcon
);
