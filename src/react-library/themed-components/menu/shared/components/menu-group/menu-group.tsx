import { useColourSchemeContext } from "@react-library/common";

import { useMenuGroupCountContext } from "../../hooks/menu-group-count-context.hook";
import { useMenuStyleContext } from "../../hooks/menu-style-context.hook";

import { menuGroupStyle } from "./styles/menu-group-style.function";
import type { MenuGroupProps } from "./types/menu-group-props.type";

/**
 * Menu group component
 */
export function MenuGroup(props: MenuGroupProps) {

	// Contexts
	const colourScheme = useColourSchemeContext();

	// Local contexts
	const groupCount = useMenuGroupCountContext();
	const style = useMenuStyleContext();

	return (
		<div style={menuGroupStyle(props.groupIndex, colourScheme, groupCount, style)}>
			{props.children}
		</div>
	);
}
