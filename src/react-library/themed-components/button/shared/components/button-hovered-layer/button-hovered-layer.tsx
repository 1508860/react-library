import { Fragment } from "react";

import { useButtonColourStateContext } from "../../hooks/button-colour-state-context.hook";
import { useButtonIsHoveredContext } from "../../hooks/button-is-hovered-context.hook";

import { buttonHoveredLayerStyle } from "./styles/button-hovered-layer-style.function";
import type { ButtonHoveredLayerProps } from "./types/button-hovered-layer-props.type";

/**
 * Button hovered layer component
 * @param props
 */
export function ButtonHoveredLayer(props: ButtonHoveredLayerProps) {

	const buttonColourState = useButtonColourStateContext();
	const buttonIsHovered = useButtonIsHoveredContext();

	if (props.isDisabled || !buttonIsHovered) return (
		<Fragment key="no-button-hovered-layer" />
	);

	return (
		<div
			key="button-hovered-layer"
			style={buttonHoveredLayerStyle(buttonColourState.hoverColour)}
		/>
	);
}
