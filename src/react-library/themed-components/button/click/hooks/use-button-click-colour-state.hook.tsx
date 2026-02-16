import { useEffect, useRef, useState } from "react";

import { ColourSchemeContainerLevel, ColourSchemeElevationLevel, useColourSchemeContext, type ColourScheme } from "@react-library/common";

import { ButtonStyle } from "../../shared/enums/button-style.type";
import { isButtonColourStateEqual } from "../../shared/functions/is-button-colour-state-equal.function";
import type { ButtonColourState } from "../../shared/types/button-colour-state.type";
import type { ButtonClickProps } from "../types/button-click-props.type";

/**
 * Derive the click button colour state based on parameters
 * @param props
 * @param isHovered
 * @param isPressed
 */
export function useButtonClickColourState(props: ButtonClickProps, isHovered: boolean, isPressed: boolean): [ButtonColourState] {

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
	props: ButtonClickProps,
	isHovered: boolean,
	isPressed: boolean,
	colourScheme: ColourScheme
): ButtonColourState {
	switch (props.style) {
		case ButtonStyle.Elevated: {

			const boxShadowElevationLevel: ColourSchemeElevationLevel = (
				props.isDisabled ? ColourSchemeElevationLevel.Level0 :
					((!isPressed && isHovered) ? ColourSchemeElevationLevel.Level2 : ColourSchemeElevationLevel.Level1)
			);

			return {
				backgroundColour: colourScheme.surface.container[ColourSchemeContainerLevel.Low],
				boxShadow: colourScheme.elevation.boxShadow[boxShadowElevationLevel],
				disabledOpacity: colourScheme.disabled.opacity,
				hoverOpacity: colourScheme.hovered.opacity,
				onColour: colourScheme.primary.default.colour,
				pulseOpacity: colourScheme.transition.pulse.opacity
			};
		}
		case ButtonStyle.Filled: {

			const boxShadowElevationLevel: ColourSchemeElevationLevel = (
				(!props.isDisabled && !isPressed && isHovered) ? ColourSchemeElevationLevel.Level1 : ColourSchemeElevationLevel.Level0
			);

			return {
				backgroundColour: colourScheme.primary.default.colour,
				boxShadow: colourScheme.elevation.boxShadow[boxShadowElevationLevel],
				disabledOpacity: colourScheme.disabled.opacity,
				hoverOpacity: colourScheme.hovered.opacity,
				onColour: colourScheme.primary.default.onColour,
				pulseOpacity: colourScheme.transition.pulse.opacity
			};
		}
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
