import type { PropsWithChildren } from "react";
import { MENU_TEXT_CONTAINER_STYLE } from "./styles/menu-text-container-style.const";

/**
 * Menu text container component
 */
export function MenuTextContainer(props: PropsWithChildren) {
	return (
		<div style={MENU_TEXT_CONTAINER_STYLE}>
			{props.children}
		</div>
	);
}
