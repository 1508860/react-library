import { MENU_ITEM_COLOUR_STATE_CONTEXT } from "../../constants/menu-item-colour-state-context.const";
import { useMenuStyleContext } from "../../hooks/menu-style-context.hook";
import { useMenuItemColourState } from "../../hooks/use-menu-item-colour-state.hook";

import { menuItemStyle } from "./styles/menu-item-style.function";
import type { MenuItemProps } from "./types/menu-item-props.type";

/**
 * Menu item component
 */
export function MenuItem(props: MenuItemProps) {

	const style = useMenuStyleContext();

	const colourState = useMenuItemColourState(props.isDisabled, props.isSelected, style);

	return (
		<MENU_ITEM_COLOUR_STATE_CONTEXT value={colourState}>
			<div
				onClick={props.onClick}
				style={menuItemStyle(colourState)}
			>
				{props.children}
			</div>
		</MENU_ITEM_COLOUR_STATE_CONTEXT>
	);
}
