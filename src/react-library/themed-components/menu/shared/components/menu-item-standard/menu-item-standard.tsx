import { Fragment, useCallback } from "react";

import type { Callback } from "@react-library/common";

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

	const handleOnClick = useCallback<Callback<void>>(
		() => props.onSelect({
			id: props.id,
			isSelected: !props.isSelected
		}),
		[props]
	);

	return (
		<MenuItem
			{...props}
			onClick={handleOnClick}
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
				<MenuText {...props} key="text" />
				<MenuSupportingText {...props} key="supporting-text" />
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
