import { Fragment } from "react";

import { useMenuItemColourStateContext } from "../../hooks/menu-item-colour-state-context.hook";
import { useMenuItemIsHoveredContext } from "../../hooks/menu-item-is-hovered-context.hook";

import { menuItemHoveredLayerStyle } from "./styles/menu-item-hovered-layer-style.function";
import type { MenuItemHoveredLayerProps } from "./types/menu-item-hovered-layer-props.type";

/**
 * Menu item hovered layer component
 * @param props
 */
export function MenuItemHoveredLayer(props: MenuItemHoveredLayerProps) {

	const colourState = useMenuItemColourStateContext();
	const isHovered = useMenuItemIsHoveredContext();

	if (props.isDisabled || !isHovered) return (
		<Fragment key="no-hovered-layer" />
	);

	return (
		<div
			key="hovered-layer"
			style={menuItemHoveredLayerStyle(colourState)}
		/>
	);
}
