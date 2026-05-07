import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { MENU_GROUP_COUNT_CONTEXT } from "../../constants/menu-group-count-context.const";
import { MENU_STYLE_CONTEXT } from "../../constants/menu-style-context.const";
import { MENU_WIDTH_CONTEXT } from "../../constants/menu-width-context.const";

import { menuContainerStyle } from "./styles/menu-container-style.function";
import type { MenuContainerProps } from "./types/menu-container-props.type";

/**
 * Menu container component
 */
export function MenuContainer(props: MenuContainerProps) {

	const resolveChildrenCount = useCallback<Callback<number>>(
		() => Array.isArray(props.children) ? props.children.length : 1,
		[props.children]
	);

	const childrenCount = useResolveState(resolveChildrenCount);

	return (
		<MENU_GROUP_COUNT_CONTEXT value={childrenCount}>
			<MENU_STYLE_CONTEXT value={props.style}>
				<MENU_WIDTH_CONTEXT value={props.width}>
					<div style={menuContainerStyle(props.width)}>
						{props.children}
					</div>
				</MENU_WIDTH_CONTEXT>
			</MENU_STYLE_CONTEXT>
		</MENU_GROUP_COUNT_CONTEXT>
	);
}
