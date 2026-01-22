import { useEffect, useRef, useState } from "react";

import { useColourSchemeContext, type IColourScheme } from "@react-library/common";

import { ButtonStyle } from "../../shared/enums/button-style.type";
import { isButtonColourStateEqual } from "../../shared/functions/is-button-colour-state-equal.function";
import type { ButtonColourState } from "../../shared/types/button-colour-state.type";
import type { ButtonSelectionProps } from "../types/button-selection-props.type";

/**
 * Derive the selection button colour state based on parameters
 * @param props
 * @param isHovered
 * @param isPressed
 */
export function useButtonSelectionColourState(props: ButtonSelectionProps, isHovered: boolean, isPressed: boolean): [ButtonColourState] {

	const colourScheme = useColourSchemeContext();
	const [state, setState] = useState<ButtonColourState>(() => resolveButtonColourState(props, isHovered, isPressed, colourScheme));
	const stateRef = useRef<ButtonColourState>(state);

	useEffect(
		() => {
			const newState = resolveButtonColourState(props, isHovered, isPressed, colourScheme);
			if (isButtonColourStateEqual(stateRef.current, newState)) return;
			stateRef.current = newState;
			setState(newState);
		},
		[props, isHovered, isPressed, colourScheme]
	);

	return [state];
}

function resolveButtonColourState(
	props: ButtonSelectionProps,
	isHovered: boolean,
	isPressed: boolean,
	colourScheme: IColourScheme
): ButtonColourState {
	switch (props.style) {
		case ButtonStyle.Elevated: return {
			backgroundColour: props.isSelected ? colourScheme.primary.default.colour : colourScheme.surface.container.low,
			boxShadow: colourScheme.elevation[`level${props.isDisabled ? 0 : ((!isPressed && isHovered) ? 2 : 1)}`].boxShadow,
			disabledOpacity: colourScheme.disabled.opacity,
			hoverOpacity: colourScheme.hovered.opacity,
			onColour: props.isSelected ? colourScheme.primary.default.onColour : colourScheme.primary.default.colour,
			pulseOpacity: colourScheme.transition.pulse.opacity
		};
		case ButtonStyle.Filled: return {
			backgroundColour: !props.isSelected ? colourScheme.surface.container.default : colourScheme.primary.default.colour,
			boxShadow: colourScheme.elevation[`level${(!props.isDisabled && !isPressed && isHovered) ? 1 : 0}`].boxShadow,
			disabledOpacity: colourScheme.disabled.opacity,
			hoverOpacity: colourScheme.hovered.opacity,
			onColour: !props.isSelected ? colourScheme.surface.variant.onColour : colourScheme.primary.default.onColour,
			pulseOpacity: colourScheme.transition.pulse.opacity
		};
		case ButtonStyle.Outline: return {
			backgroundColour: props.isSelected ? colourScheme.surface.inverse.colour : undefined,
			borderColour: colourScheme.outline.outlineVariant,
			disabledOpacity: colourScheme.disabled.opacity,
			hoverOpacity: colourScheme.hovered.opacity,
			onColour: props.isSelected ? colourScheme.surface.inverse.onColour : colourScheme.surface.variant.onColour,
			pulseOpacity: colourScheme.transition.pulse.opacity
		};
	}
}
