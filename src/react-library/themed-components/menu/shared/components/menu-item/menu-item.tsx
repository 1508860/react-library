import { Fragment, useCallback, useState } from "react";

import type { Callback } from "@react-library/common";
import {
	resolveTransitionPulseInsetFromEvent,
	type TransitionPulseInsetData
} from "@react-library/components";

import { MENU_ITEM_CLICKED_INSET_CONTEXT } from "../../constants/menu-item-clicked-inset-context.const";
import { MENU_ITEM_COLOUR_STATE_CONTEXT } from "../../constants/menu-item-colour-state-context.const";
import { MENU_ITEM_IS_HOVERED_CONTEXT } from "../../constants/menu-item-is-hovered-context.const";
import { useMenuStyleContext } from "../../hooks/menu-style-context.hook";
import { useMenuItemColourState } from "../../hooks/use-menu-item-colour-state.hook";

import { menuItemStyle } from "./styles/menu-item-style.function";
import type { MenuItemProps } from "./types/menu-item-props.type";

/**
 * Menu item component
 */
export function MenuItem(props: MenuItemProps) {

	// Local contexts
	const style = useMenuStyleContext();

	// Input event states
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const handleOnPointerEnter = useCallback<Callback<void>>(() => setIsHovered(true), []);
	const handleOnPointerLeave = useCallback<Callback<void>>(() => setIsHovered(false), []);

	// Clicked inset
	const [clickedInset, setClickedInset] = useState<TransitionPulseInsetData | null>(() => null);

	// Handle on click
	const handleOnClick = useCallback(
		(event: React.MouseEvent<Element>) => {
			if (!props.onClick || props.isDisabled) return;
			setClickedInset(resolveTransitionPulseInsetFromEvent(event));
			props.onClick();
		},
		[props]
	);

	// Colour state
	const colourState = useMenuItemColourState(props.isDisabled, props.isSelected, style);

	if (!props.onClick || props.isDisabled) return (
		<Fragment key="readonly">
			<MENU_ITEM_COLOUR_STATE_CONTEXT value={colourState}>
				<div style={menuItemStyle(colourState)}>
					{props.children}
				</div>
			</MENU_ITEM_COLOUR_STATE_CONTEXT>
		</Fragment>
	);

	return (
		<Fragment key="default">
			<MENU_ITEM_IS_HOVERED_CONTEXT value={isHovered}>
				<MENU_ITEM_CLICKED_INSET_CONTEXT value={clickedInset}>
					<MENU_ITEM_COLOUR_STATE_CONTEXT value={colourState}>
						<div
							onClick={handleOnClick}
							onPointerCancel={handleOnPointerLeave}
							onPointerEnter={handleOnPointerEnter}
							onPointerLeave={handleOnPointerLeave}
							style={menuItemStyle(colourState)}
						>
							{props.children}
						</div>
					</MENU_ITEM_COLOUR_STATE_CONTEXT>
				</MENU_ITEM_CLICKED_INSET_CONTEXT>
			</MENU_ITEM_IS_HOVERED_CONTEXT>
		</Fragment>
	);
}
