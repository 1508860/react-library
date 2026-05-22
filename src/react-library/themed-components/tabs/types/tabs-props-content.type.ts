import type { IContent, IItems } from "@react-library/common";

import type { TabsContent } from "../enums/tabs-content.type";

import type { TabsItemsDefault, TabsItemsWithIcon } from "./tabs-item.type";

/**
 * Describes the tabs component's content props
 */
export type TabsPropsContent<TContent extends TabsContent> = (
	IContent<TContent>
);

/**
 * Describes the tabs component's props for default content
 */
export type TabsPropsContentDefault = (
	IItems<TabsItemsDefault> &
	TabsPropsContent<typeof TabsContent.Default>
);

/**
 * Describes the tabs component's props for content with an icon
 */
export type TabsPropsContentWithIcon = (
	IItems<TabsItemsWithIcon> &
	TabsPropsContent<typeof TabsContent.WithIcon>
);

/**
 * Describes the tabs component's props for all content types
 */
export type TabsPropsContentAll = (
	TabsPropsContentDefault |
	TabsPropsContentWithIcon
);
