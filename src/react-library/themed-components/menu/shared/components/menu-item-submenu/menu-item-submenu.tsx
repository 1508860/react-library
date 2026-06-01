import { Fragment, useCallback, useEffect, useRef, type ReactElement } from "react";

import type { Callback, CallbackWithParameter } from "@react-library/common";
import {
	HoverLayer,
	Tooltip,
	TransitionPulse,
	TransitionTiming,
	useTooltipBackdropConfigCallbackContext,
	useTooltipChildPropsContext,
	useTooltipContentCallbackContext,
	useTooltipShowCallbackContext,
	useTooltipShowContext
} from "@react-library/components";
import { MaterialIconName } from "@react-library/material-icons";

import { MENU_OVERLAY_PORTAL_MARGIN } from "../../constants/menu-position-margin.const";
import { MENU_POSITION_STRATEGIES } from "../../constants/menu-position-strategies.const";
import { MENU_TRANSITION_PULSE_LAYER_MS } from "../../constants/menu-transition.const";
import { useMenuStyleContext } from "../../hooks/menu-style-context.hook";
import type { MenuPropsItemContentSubmenu } from "../../types/menu-props-item-content.type";
import type { MenuPropsOnPointerEnter } from "../../types/menu-props-on-pointer-enter.type";
import type { MenuPropsOnPointerLeave } from "../../types/menu-props-on-pointer-leave.type";

import { MenuIcon } from "../menu-icon";
import { MenuItem } from "../menu-item";
import { MenuResolver } from "../menu-resolver";
import { MenuSupportingText } from "../menu-supporting-text";
import { MenuText } from "../menu-text";
import { MenuTextContainer } from "../menu-text-container";

/**
 * Menu item submenu component
 */
export function MenuItemSubmenu(props: MenuPropsItemContentSubmenu) {
	return (
		<Tooltip
			isDisabled={props.isDisabled}
			overlayPortalMargin={MENU_OVERLAY_PORTAL_MARGIN}
			positionStrategies={MENU_POSITION_STRATEGIES}
		>
			<MenuItemSubmenuChild {...props} />
		</Tooltip>
	);
}

function MenuItemSubmenuChild(props: MenuPropsItemContentSubmenu) {

	// Menu contexts
	const menuStyle = useMenuStyleContext();

	// Tooltip contexts
	const tooltipBackdropConfigCallback = useTooltipBackdropConfigCallbackContext();
	const tooltipChildProps = useTooltipChildPropsContext();
	const tooltipContentCallback = useTooltipContentCallbackContext();
	const tooltipShowCallback = useTooltipShowCallbackContext();
	const tooltipShow = useTooltipShowContext();

	// Influences when menu is deconstructed based on click vs pointer interaction type
	const isClicked = useRef<boolean>(false);

	// Resolve menu based on submenu props
	const menuResolverCallback = useCallback<CallbackWithParameter<(MenuPropsOnPointerEnter & MenuPropsOnPointerLeave), ReactElement>>(
		(menuProps) => (
			<MenuResolver
				groups={props.groups}
				containerWidth={props.containerWidth}
				onPointerEnter={menuProps.onPointerEnter}
				onPointerLeave={menuProps.onPointerLeave}
				style={menuStyle}
			/>
		),
		[props.containerWidth, props.groups, menuStyle]
	);

	// Handle state when tooltip is not shown
	useEffect(
		() => {
			if (tooltipShow) return;
			if (isClicked.current) isClicked.current = false;
			tooltipBackdropConfigCallback(undefined);
			tooltipContentCallback(undefined);
		},
		[tooltipBackdropConfigCallback, tooltipContentCallback, tooltipShow]
	);

	// Update sub menu if props change
	useEffect(
		() => {
			if (!tooltipShow) return;
			if (isClicked.current) {
				tooltipContentCallback(menuResolverCallback({}));
				return;
			}
			tooltipContentCallback(
				menuResolverCallback({
					onPointerEnter: () => tooltipShowCallback(true),
					onPointerLeave: () => {
						if (isClicked.current) return;
						tooltipShowCallback(false);
					}
				})
			);
		},
		[menuResolverCallback, tooltipContentCallback, tooltipShow, tooltipShowCallback]
	);

	// Input events
	const handleOnClick = useCallback<Callback<void>>(
		() => {
			isClicked.current = true;
			tooltipBackdropConfigCallback({ onDismiss: () => tooltipShowCallback(false) });
			tooltipShowCallback(true);
		},
		[tooltipBackdropConfigCallback, tooltipShowCallback]
	);
	const handleOnPointerEnter = useCallback<Callback<void>>(() => tooltipShowCallback(true), [tooltipShowCallback]);
	const handleOnPointerLeave = useCallback<Callback<void>>(
		() => {
			if (isClicked.current) return;
			tooltipShowCallback(false);
		},
		[tooltipShowCallback]
	);

	return (
		<MenuItem
			{...props}
			isSelected={tooltipShow}
			onClick={handleOnClick}
			onPointerEnter={handleOnPointerEnter}
			onPointerLeave={handleOnPointerLeave}
			ref={tooltipChildProps.ref}
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
			<TransitionPulse
				durationMs={MENU_TRANSITION_PULSE_LAYER_MS}
				key="pulse-layer"
				timing={TransitionTiming.EaseInOut}
			/>
			<HoverLayer key="hover-layer" />
		</MenuItem>
	);
}
