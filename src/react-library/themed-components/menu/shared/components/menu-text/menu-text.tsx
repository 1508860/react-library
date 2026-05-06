import { useFontContext } from "@react-library/common";

import { useMenuItemColourStateContext } from "../../hooks/menu-item-colour-state-context.hook";

import { menuTextStyle } from "./styles/menu-text-style.function";
import type { MenuTextProps } from "./types/menu-text-props.type";

/**
 * Menu text component
 */
export function MenuText(props: MenuTextProps) {

	const font = useFontContext();

	const colourState = useMenuItemColourStateContext();

	return (
		<div style={menuTextStyle(font, colourState)}>
			{props.text}
		</div>
	);
}
