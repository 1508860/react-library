import { useCallback, useState } from "react";

import type { Callback, CallbackWithParameter } from "@react-library/common";
import {
	resolveTransitionPulseInsetFromEvent,
	TransitionPulseColourProvider,
	TransitionPulseInsetDataProvider,
	type TransitionPulseInsetData
} from "@react-library/components";

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
	const handleOnPointerEnter = useCallback<Callback<void>>(
		() => {
			if (props.isDisabled) return;
			if (props.onPointerEnter) props.onPointerEnter();
			setIsHovered(true);
		},
		[props]
	);

	const handleOnPointerLeave = useCallback<Callback<void>>(
		() => {
			if (props.isDisabled) return;
			if (props.onPointerLeave) props.onPointerLeave();
			setIsHovered(false);
		},
		[props]
	);

	// Transition pulse inset data
	const [transitionPulseInsetData, setTransitionPulseInsetData] = useState<TransitionPulseInsetData | undefined>(() => undefined);

	// Handle on click
	const handleOnClick = useCallback<CallbackWithParameter<React.MouseEvent<Element>, void>>(
		(event) => {
			if (!props.onClick || props.isDisabled) return;
			setTransitionPulseInsetData(resolveTransitionPulseInsetFromEvent(event));
			props.onClick();
		},
		[props]
	);

	// Colour state
	const colourState = useMenuItemColourState(props.isDisabled, props.isSelected, style);

	return (
		<TransitionPulseColourProvider colour={colourState.pulse}>
			<TransitionPulseInsetDataProvider insetData={transitionPulseInsetData}>
				<MENU_ITEM_IS_HOVERED_CONTEXT value={isHovered}>
					<MENU_ITEM_COLOUR_STATE_CONTEXT value={colourState}>
						{
							(!props.onClick || props.isDisabled) ?
								<div
									key="readonly"
									style={menuItemStyle(colourState)}
								>
									{props.children}
								</div> :
								<div
									key="standard"
									onClick={handleOnClick}
									onPointerCancel={handleOnPointerLeave}
									onPointerEnter={handleOnPointerEnter}
									onPointerLeave={handleOnPointerLeave}
									ref={props.ref}
									style={menuItemStyle(colourState)}
								>
									{props.children}
								</div>
						}
					</MENU_ITEM_COLOUR_STATE_CONTEXT>
				</MENU_ITEM_IS_HOVERED_CONTEXT>
			</TransitionPulseInsetDataProvider>
		</TransitionPulseColourProvider>
	);
}
