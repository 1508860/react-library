import { MenuItemContent } from "../../enums/menu-item-content.type";
import type { MenuPropsItemAllResolver } from "../../types/menu-props-item-content.type";

import { MenuItemStandard } from "../menu-item-standard";
import { MenuItemSubmenu } from "../menu-item-submenu";
import { MenuItemTitle } from "../menu-item-title";

/**
 * Menu item resolver component
 */
export function MenuItemResolver(props: MenuPropsItemAllResolver) {
	if (props.content === MenuItemContent.Submenu) return (
		<MenuItemSubmenu {...props} key="submenu" />
	);

	if (props.content === MenuItemContent.Title) return (
		<MenuItemTitle {...props} key="title" />
	);

	// Standard
	return (
		<MenuItemStandard {...props} key="standard" />
	);
}
