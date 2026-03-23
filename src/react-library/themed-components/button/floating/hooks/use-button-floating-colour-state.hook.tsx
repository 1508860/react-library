import { useEffect, useRef, useState } from "react";

import {
	ColourSchemeElevationLevel,
	ColourSchemeStyle,
	useColourSchemeContext,
	type Colour,
	type ColourScheme
} from "@react-library/common";

import type { ButtonContainerUseColourStateParam } from "../../shared/components/button-container";
import { isButtonColourStateEqual } from "../../shared/functions/is-button-colour-state-equal.function";
import type { ButtonColourState } from "../../shared/types/button-colour-state.type";
import type { ButtonFloatingProps } from "../types/button-floating-props.type";

/**
 * Derive the floating button colour state based on parameters
 * @param param
 */
export function useButtonFloatingColourState(param: ButtonContainerUseColourStateParam<ButtonFloatingProps>): [ButtonColourState] {

	const colourScheme = useColourSchemeContext();
	const [state, setState] = useState<ButtonColourState>(() => resolveButtonColourState(param, colourScheme));
	const stateRef = useRef<ButtonColourState>(state);

	useEffect(
		() => {
			const newState = resolveButtonColourState(param, colourScheme);
			if (isButtonColourStateEqual(stateRef.current, newState)) return;
			stateRef.current = newState;
			setState(newState);
		},
		[param, colourScheme]
	);

	return [state];
}

function resolveButtonColourState(param: ButtonContainerUseColourStateParam<ButtonFloatingProps>, colourScheme: ColourScheme): ButtonColourState {

	const boxShadowElevationLevel: ColourSchemeElevationLevel = (
		(!param.config.isDisabled && !param.isPressed && param.isHovered) ? ColourSchemeElevationLevel.Level4 : ColourSchemeElevationLevel.Level3
	);
	let backgroundColour: Colour | undefined = undefined;
	let onColour: Colour | undefined = undefined;

	switch (param.config.colourSchemeStyle) {
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
		boxShadow: colourScheme.elevation.boxShadow[boxShadowElevationLevel],
		disabledColour: onColour.toColourWithStyleOpacity(colourScheme.disabled.opacity),
		hoverColour: onColour.toColourWithStyleOpacity(colourScheme.hovered.opacity),
		onColour: onColour,
		pulseColour: onColour.toColourWithStyleOpacity(colourScheme.transition.pulse.opacity)
	};
}
