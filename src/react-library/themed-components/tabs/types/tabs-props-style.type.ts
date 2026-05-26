import type { IContent, IItems, IStyle } from "@react-library/common";

import type { TabsContent } from "../enums/tabs-content.type";
import type { TabsStyle } from "../enums/tabs-style.type";

import type { TabsItemsDefault, TabsItemsWithIcon } from "./tabs-item.type";
import type { TabsPropsItemOrientation } from "./tabs-props-item-orientation.type";

/**
 * Describes props for the tabs component's style
 */
export type TabsPropsStyle<TStyle extends TabsStyle> = (
	IStyle<TStyle>
);

/**
 * Describes the tabs component's content props
 */
export type TabsPropsContent<TContent extends TabsContent> = (
	IContent<TContent>
);

/**
 * Describes props for a primary style tabs component with default content
 */
export type TabsPropsStylePrimaryDefault = (
	IItems<TabsItemsDefault> &
	TabsPropsContent<typeof TabsContent.Default> &
	TabsPropsStyle<typeof TabsStyle.Primary>
);

/**
 * Describes props for a primary style tabs component with icon content
 */
export type TabsPropsStylePrimaryWithIcon = (
	IItems<TabsItemsWithIcon> &
	TabsPropsContent<typeof TabsContent.WithIcon> &
	TabsPropsItemOrientation &
	TabsPropsStyle<typeof TabsStyle.Primary>
);

/**
 * Describes props for a secondary style tabs component with default content
 */
export type TabsPropsStyleSecondaryDefault = (
	IItems<TabsItemsDefault> &
	TabsPropsContent<typeof TabsContent.Default> &
	TabsPropsStyle<typeof TabsStyle.Secondary>
);

/**
 * Describes props for a secondary style tabs component with icon content
 */
export type TabsPropsStyleSecondaryWithIcon = (
	IItems<TabsItemsWithIcon> &
	TabsPropsContent<typeof TabsContent.WithIcon> &
	TabsPropsStyle<typeof TabsStyle.Secondary>
);

/**
 * Describes props for all actionable menu items
 */
export type TabsPropsStyleAll = (
	TabsPropsStylePrimaryDefault |
	TabsPropsStylePrimaryWithIcon |
	TabsPropsStyleSecondaryDefault |
	TabsPropsStyleSecondaryWithIcon
);
