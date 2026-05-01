import { Fragment } from "react";

import { useSwitchColourStateContext } from "../../hooks/switch-colour-state-context.hook";
import { useSwitchIsHoveredContext } from "../../hooks/switch-is-hovered-context.hook";

import { switchHoveredLayerStyle } from "./styles/switch-hovered-layer-style.function";
import type { SwitchHoveredLayerProps } from "./types/switch-hovered-layer-props.type";

/**
 * Switch hovered layer component
 * @param props
 */
export function SwitchHoveredLayer(props: SwitchHoveredLayerProps) {

	const switchColourState = useSwitchColourStateContext();
	const switchIsHovered = useSwitchIsHoveredContext();

	if (props.isDisabled || !switchIsHovered) return (
		<Fragment key="no-hovered-layer" />
	);

	return (
		<div
			key="hovered-layer"
			style={switchHoveredLayerStyle(switchColourState)}
		/>
	);
}
