import { Fragment, useCallback } from "react";

import type { Callback } from "@react-library/common";
import { TransitionPulse, TransitionTiming } from "@react-library/components";
import { MaterialIconName } from "@react-library/material-icons";

import { MENU_TRANSITION_PULSE_LAYER_MS } from "../../constants/menu-transition.const";
import { useMenuItemIsSelectedState } from "../../hooks/menu-item-is-selected-state.hook";
import type { MenuPropsItemContentStandard } from "../../types/menu-props-item-content.type";

import { MenuIcon } from "../menu-icon";
import { MenuItem } from "../menu-item";
import { MenuItemHoveredLayer } from "../menu-item-hovered-layer";
import { MenuSupportingText } from "../menu-supporting-text";
import { MenuText } from "../menu-text";
import { MenuTextContainer } from "../menu-text-container";

/**
 * Menu item standard component
 */
export function MenuItemStandard(props: MenuPropsItemContentStandard) {

	const handleOnClick = useCallback<Callback<void>>(
		() => props.onSelect(),
		[props]
	);

	const isSelected = useMenuItemIsSelectedState(props.id);

	return (
		<MenuItem
			{...props}
			isSelected={isSelected}
			onClick={handleOnClick}
		>
			{
				isSelected ?
					<MenuIcon
						iconName={MaterialIconName.CheckSmall}
						key="is-selected"
					/> :
					<Fragment key="no-is-selected" />
			}
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
			<MenuItemHoveredLayer
				{...props}
				key="hovered-layer"
			/>
			<TransitionPulse
				durationMs={MENU_TRANSITION_PULSE_LAYER_MS}
				key="pulse-layer"
				timing={TransitionTiming.EaseInOut}
			/>
		</MenuItem>
	);
}
