import { useFontContext } from "@react-library/common";

import { useMenuItemColourStateContext } from "../../hooks/menu-item-colour-state-context.hook";

import { menuTitleStyle } from "./styles/menu-title-style.function";
import type { MenuTitleProps } from "./types/menu-title-props.type";

/**
 * Menu title component
 */
export function MenuTitle(props: MenuTitleProps) {

	const font = useFontContext();

	const colourState = useMenuItemColourStateContext();

	return (
		<div style={menuTitleStyle(font, colourState)}>
			{props.title}
		</div>
	);
}
