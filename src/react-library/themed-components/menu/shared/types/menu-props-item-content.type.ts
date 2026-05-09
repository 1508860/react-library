import type { ArrayMinLength1, IGroups, IItems, ISections } from "@react-library/common";

import type { MenuItemContent } from "../enums/menu-item-content.type";

import type { MenuPropsContainerWidth } from "./menu-props-container-width.type";
import type { MenuPropsContent } from "./menu-props-content.type";
import type { MenuPropsId } from "./menu-props-id.type";
import type { MenuPropsIsDisabled } from "./menu-props-is-disabled.type";
import type { MenuPropsLeadingIconName } from "./menu-props-leading-icon-name.type";
import type { MenuPropsOnSelect } from "./menu-props-on-select.type";
import type { MenuPropsSupportingText } from "./menu-props-supporting-text.type";
import type { MenuPropsText } from "./menu-props-text.type";
import type { MenuPropsTitle } from "./menu-props-title.type";
import type { MenuPropsTrailingIconName } from "./menu-props-trailing-icon-name.type";

type MenuPropsItemContentBase = (
	MenuPropsId
);

/**
 * Describes props for a standard menu item
 */
export type MenuPropsItemContentStandard = (
	MenuPropsContent<typeof MenuItemContent.Standard> &
	MenuPropsIsDisabled &
	MenuPropsItemContentBase &
	MenuPropsLeadingIconName &
	MenuPropsOnSelect &
	MenuPropsSupportingText &
	MenuPropsText &
	MenuPropsTrailingIconName
);

/**
 * Describes props for a submenu menu item
 */
export type MenuPropsItemContentSubmenu = (
	MenuPropsContainerWidth &
	MenuPropsContent<typeof MenuItemContent.Submenu> &
	MenuPropsIsDisabled &
	MenuPropsItemContentBase &
	MenuPropsItemContentContainer &
	MenuPropsLeadingIconName &
	MenuPropsSupportingText &
	MenuPropsText
);

/**
 * Describes props for a title menu item
 */
export type MenuPropsItemContentTitle = (
	MenuPropsContent<typeof MenuItemContent.Title> &
	MenuPropsItemContentBase &
	MenuPropsTitle
);

/**
 * Describes props for all menu items that need to be resolved by content type
 */
export type MenuPropsItemAllResolver = (
	MenuPropsItemContentStandard |
	MenuPropsItemContentSubmenu |
	MenuPropsItemContentTitle
);

/**
 * Describes props for all actionable menu items
 * Note: These are items that are not decorative and form the basis of meaningful actions in the menu
 */
export type MenuPropsItemContentAllAction = (
	MenuPropsItemContentStandard |
	MenuPropsItemContentSubmenu
);

/**
 * Describes props for a menu item section
 */
export type MenuPropsItemContentSection = (
	IItems<(
		[
			MenuPropsItemContentTitle,
			...ArrayMinLength1<MenuPropsItemContentAllAction>
		] |
		ArrayMinLength1<MenuPropsItemContentAllAction>
	)> &
	MenuPropsId
);

/**
 * Describes props for a menu item group
 * - Each section is separated by a divider
 */
export type MenuPropsItemContentGroup = (
	MenuPropsId &
	ISections<ArrayMinLength1<MenuPropsItemContentSection>>
);

/**
 * Describes props for a menu item group
 * - Each section is separated by a gap
 */
export type MenuPropsItemContentContainer = (
	IGroups<ArrayMinLength1<MenuPropsItemContentGroup>>
);
