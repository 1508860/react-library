import { useEffect, useRef, useState } from "react";

import {
	ColourSchemeStyle,
	useColourSchemeContext,
	type Colour,
	type IColourScheme
} from "@react-library/common";

import { isButtonColourStateEqual } from "../../shared/functions/is-button-colour-state-equal.function";
import type { ButtonColourState } from "../../shared/types/button-colour-state.type";
import type { ButtonFloatingProps } from "../types/button-floating-props.type";

/**
 * Derive the floating button colour state based on parameters
 * @param props
 * @param isHovered
 * @param isPressed
 */
export function useButtonFloatingColourState(props: ButtonFloatingProps, isHovered: boolean, isPressed: boolean): [ButtonColourState] {

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
	props: ButtonFloatingProps,
	isHovered: boolean,
	isPressed: boolean,
	colourScheme: IColourScheme
): ButtonColourState {
	let backgroundColour: Colour | undefined = undefined;
	let onColour: Colour | undefined = undefined;

	switch (props.colourSchemeStyle) {
		case ColourSchemeStyle.Primary:
			backgroundColour = colourScheme.primary.default.colour;
			onColour = colourScheme.primary.default.onColour;
			break;
		case ColourSchemeStyle.PrimaryContainer:
			backgroundColour = colourScheme.primary.container.colour;
			onColour = colourScheme.primary.container.onColour;
			break;
		case ColourSchemeStyle.Secondary:
			backgroundColour = colourScheme.secondary.default.colour;
			onColour = colourScheme.secondary.default.onColour;
			break;
		case ColourSchemeStyle.SecondaryContainer:
			backgroundColour = colourScheme.secondary.container.colour;
			onColour = colourScheme.secondary.container.onColour;
			break;
		case ColourSchemeStyle.Tertiary:
			backgroundColour = colourScheme.tertiary.default.colour;
			onColour = colourScheme.tertiary.default.onColour;
			break;
		case ColourSchemeStyle.TertiaryContainer:
			backgroundColour = colourScheme.tertiary.container.colour;
			onColour = colourScheme.tertiary.container.onColour;
			break;
	}

	return {
		backgroundColour: backgroundColour,
		boxShadow: colourScheme.elevation[`level${(!props.isDisabled && !isPressed && isHovered) ? 4 : 3}`].boxShadow,
		disabledOpacity: colourScheme.disabled.opacity,
		hoverOpacity: colourScheme.hovered.opacity,
		onColour: onColour,
		pulseOpacity: colourScheme.transition.pulse.opacity
	};
}
