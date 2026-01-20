import { useEffect, useState } from "react";

import { useColourSchemeContext, type IColourScheme } from "@react-library/common";

import { ButtonStyle } from "../../shared/enums/button-style.type";
import type { ButtonColourState } from "../../shared/types/button-colour-state.type";
import type { ButtonSplitProps } from "../types/button-split-props.type";

/**
 * Derive the split button colour state based on parameters
 * @param props
 * @param isHovered
 * @param isPressed
 */
export function useButtonSplitColourState(props: ButtonSplitProps, isHovered: boolean, isPressed: boolean): [ButtonColourState] {
	const colourScheme = useColourSchemeContext();
	const [state, setState] = useState<ButtonColourState>(() => resolveButtonColourState(props, isHovered, isPressed, colourScheme));
	useEffect(() => setState(resolveButtonColourState(props, isHovered, isPressed, colourScheme)), [props, isHovered, isPressed, colourScheme]);
	return [state];
}

function resolveButtonColourState(
	props: ButtonSplitProps,
	isHovered: boolean,
	isPressed: boolean,
	colourScheme: IColourScheme
): ButtonColourState {
	switch (props.style) {
		case ButtonStyle.Elevated: return {
			backgroundColour: colourScheme.surface.container.low,
			boxShadow: colourScheme.elevation[`level${props.isDisabled ? 0 : ((!isPressed && isHovered) ? 2 : 1)}`].boxShadow,
			disabledOpacity: colourScheme.disabled.opacity,
			hoverOpacity: colourScheme.hovered.opacity,
			onColour: colourScheme.primary.default.colour,
			pulseOpacity: colourScheme.transition.pulse.opacity
		};
		case ButtonStyle.Filled: return {
			backgroundColour: colourScheme.primary.default.colour,
			boxShadow: colourScheme.elevation[`level${(!props.isDisabled && !isPressed && isHovered) ? 1 : 0}`].boxShadow,
			disabledOpacity: colourScheme.disabled.opacity,
			hoverOpacity: colourScheme.hovered.opacity,
			onColour: colourScheme.primary.default.onColour,
			pulseOpacity: colourScheme.transition.pulse.opacity
		};
		case ButtonStyle.Outline: return {
			backgroundColour: undefined,
			borderColour: colourScheme.outline.outlineVariant,
			disabledOpacity: colourScheme.disabled.opacity,
			hoverOpacity: colourScheme.hovered.opacity,
			onColour: colourScheme.surface.variant.onColour,
			pulseOpacity: colourScheme.transition.pulse.opacity
		};
	}
}
