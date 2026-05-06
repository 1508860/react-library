import { Fragment } from "react";

import { MaterialIconName } from "@react-library/material-icons";

import type { MenuPropsItemContentSubmenu } from "../../types/menu-props-item-content.type";

import { MenuIcon } from "../menu-icon";
import { MenuItem } from "../menu-item";
import { MenuSupportingText } from "../menu-supporting-text";
import { MenuText } from "../menu-text";
import { MenuTextContainer } from "../menu-text-container";

/**
 * Menu item submenu component
 */
export function MenuItemSubmenu(props: MenuPropsItemContentSubmenu) {
	return (
		<MenuItem
			{...props}
		>
			{
				props.leadingIconName ?
					<MenuIcon
						iconName={props.leadingIconName}
						key="leading-icon"
					/> :
					<Fragment key="no-leading-icon" />
			}
			<MenuTextContainer key="text-container">
				<MenuText {...props} />
				<MenuSupportingText {...props} />
			</MenuTextContainer>
			{
				<MenuIcon
					iconName={MaterialIconName.ChevronRight}
					key="trailing-icon"
				/>
			}
		</MenuItem>
	);
}
