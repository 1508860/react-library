import { Fragment } from "react";

import { MaterialIconName } from "@react-library/material-icons";

import type { MenuPropsItemContentSubmenu } from "../../types/menu-props-item-content.type";

import { MenuIcon } from "../menu-icon";
import { MenuItem } from "../menu-item";
import { MenuItemHoveredLayer } from "../menu-item-hovered-layer";
import { MenuItemPulseLayer } from "../menu-item-pulse-layer";
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
			onClick={() => { }}
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
			<MenuIcon
				iconName={MaterialIconName.ChevronRight}
				key="trailing-icon"
			/>
			<MenuItemHoveredLayer
				{...props}
				key="hovered-layer"
			/>
			<MenuItemPulseLayer
				key="pulse-layer"
			/>
		</MenuItem>
	);
}
