import { useFontContext } from "@react-library/common";

import { useMenuItemColourStateContext } from "../../hooks/menu-item-colour-state-context.hook";

import { menuSupportingTextStyle } from "./styles/menu-supporting-text-style.function";
import type { MenuSupportingTextProps } from "./types/menu-supporting-text-props.type";

/**
 * Menu text supporting component
 */
export function MenuSupportingText(props: MenuSupportingTextProps) {

	const font = useFontContext();

	const colourState = useMenuItemColourStateContext();

	return (
		<div style={menuSupportingTextStyle(font, colourState)}>
			{props.supportingText}
		</div>
	);
}
