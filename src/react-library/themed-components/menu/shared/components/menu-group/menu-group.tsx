import type { PropsWithChildren } from "react";

import { useColourSchemeContext } from "@react-library/common";

import { useMenuStyleContext } from "../../hooks/menu-style-context.hook";

import { menuGroupStyle } from "./styles/menu-group-style.function";

/**
 * Menu group component
 */
export function MenuGroup(props: PropsWithChildren) {

	const colourScheme = useColourSchemeContext();

	const style = useMenuStyleContext();

	return (
		<div style={menuGroupStyle(style, colourScheme)}>
			{props.children}
		</div>
	);
}
