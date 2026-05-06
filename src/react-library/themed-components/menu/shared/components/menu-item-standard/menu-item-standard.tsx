import { Fragment } from "react";

import type { MenuPropsItemContentStandard } from "../../types/menu-props-item-content.type";

import { MenuIcon } from "../menu-icon";
import { MenuItem } from "../menu-item";
import { MenuSupportingText } from "../menu-supporting-text";
import { MenuText } from "../menu-text";
import { MenuTextContainer } from "../menu-text-container";

/**
 * Menu item standard component
 */
export function MenuItemStandard(props: MenuPropsItemContentStandard) {

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
				props.trailingIconName ?
					<MenuIcon
						iconName={props.trailingIconName}
						key="trailing-icon"
					/> :
					<Fragment key="no-trailing-icon" />
			}
		</MenuItem>
	);
}
