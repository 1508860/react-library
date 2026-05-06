import { MENU_STYLE_CONTEXT } from "../../constants/menu-style-context.const";

import { menuContainerStyle } from "./styles/menu-container-style.function";
import type { MenuContainerProps } from "./types/menu-container-props.type";

/**
 * Menu container component
 */
export function MenuContainer(props: MenuContainerProps) {
	return (
		<MENU_STYLE_CONTEXT value={props.style}>
			<div style={menuContainerStyle(props.width)}>
				{props.children}
			</div>
		</MENU_STYLE_CONTEXT>
	);
}
