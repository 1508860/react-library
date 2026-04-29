import { Fragment } from "react";

import { useRadioButtonColourStateContext } from "../../hooks/radio-button-colour-state-context.hook";
import { useRadioButtonIsHoveredContext } from "../../hooks/radio-button-is-hovered-context.hook";

import { radioButtonHoveredLayerStyle } from "./styles/radio-button-hovered-layer-style.function";
import type { RadioButtonHoveredLayerProps } from "./types/radio-button-hovered-layer-props.type";

/**
 * Radio button hovered layer component
 * @param props
 */
export function RadioButtonHoveredLayer(props: RadioButtonHoveredLayerProps) {

	const radioButtonColourState = useRadioButtonColourStateContext();
	const radioButtonIsHovered = useRadioButtonIsHoveredContext();

	if (props.isDisabled || !radioButtonIsHovered) return (
		<Fragment key="no-hovered-layer" />
	);

	return (
		<div
			key="hovered-layer"
			style={radioButtonHoveredLayerStyle(radioButtonColourState)}
		/>
	);
}
