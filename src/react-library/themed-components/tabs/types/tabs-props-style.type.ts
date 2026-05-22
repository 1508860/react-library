import type { IStyle } from "@react-library/common";

import type { TabsStyle } from "../enums/tabs-style.type";

import type { TabsPropsItemOrientation } from "./tabs-props-item-orientation.type";

/**
 * Describes props for the tabs component's style
 */
export type TabsPropsStyle<TStyle extends TabsStyle> = (
	IStyle<TStyle>
);

/**
 * Describes props for a primary style tabs component
 */
export type TabsPropsStylePrimary = (
	TabsPropsItemOrientation &
	TabsPropsStyle<typeof TabsStyle.Primary>
);

/**
 * Describes props for a secondary style tabs component
 */
export type TabsPropsStyleSecondary = (
	TabsPropsStyle<typeof TabsStyle.Secondary>
);

/**
 * Describes props for all actionable menu items
 */
export type TabsPropsStyleAll = (
	TabsPropsStylePrimary |
	TabsPropsStyleSecondary
);
