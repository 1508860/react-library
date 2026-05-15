import type { IItems } from "@react-library/common";

import type { MenuPropsItemContentStandard } from "./menu-props-item-content.type";

/**
 * Describes props for a menu select items
 */
export type MenuPropsSelectItems = (
	IItems<MenuSelectItems>
);


/**
 * Describes menu select items collection
 */
export type MenuSelectItems = Array<MenuSelectItem>;

/**
 * Describes menu select item
 */
export type MenuSelectItem = MenuPropsItemContentStandard;
