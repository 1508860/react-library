import { useEffect, useRef, useState } from "react";

import { ColourSchemeContainerLevel, ColourSchemeElevationLevel, useColourSchemeContext, type ColourScheme } from "@react-library/common";

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
	colourScheme: ColourScheme
): ButtonColourState {
	switch (props.style) {
		case ButtonStyle.Elevated: {

			const boxShadowElevationLevel: ColourSchemeElevationLevel = (
				props.isDisabled ? ColourSchemeElevationLevel.Level0 :
					((!isPressed && isHovered) ? ColourSchemeElevationLevel.Level2 : ColourSchemeElevationLevel.Level1)
			);

			const onColour = props.isSelected ? colourScheme.primary.default.onColour : colourScheme.primary.default.colour;

			return {
				backgroundColour: props.isSelected ? colourScheme.primary.default.colour : colourScheme.surface.container[ColourSchemeContainerLevel.Low],
				boxShadow: colourScheme.elevation.boxShadow[boxShadowElevationLevel],
				disabledColour: onColour.toColourWithStyleOpacity(colourScheme.disabled.opacity),
				hoverColour: onColour.toColourWithStyleOpacity(colourScheme.hovered.opacity),
				onColour: onColour,
				pulseColour: onColour.toColourWithStyleOpacity(colourScheme.transition.pulse.opacity)
			};
		};
		case ButtonStyle.Filled: {

			const boxShadowElevationLevel: ColourSchemeElevationLevel = (
				(!props.isDisabled && !isPressed && isHovered) ? ColourSchemeElevationLevel.Level1 : ColourSchemeElevationLevel.Level0
			);

			const onColour = !props.isSelected ? colourScheme.surface.variant.onColour : colourScheme.primary.default.onColour;

			return {
				backgroundColour: !props.isSelected ? colourScheme.surface.container[ColourSchemeContainerLevel.Medium] : colourScheme.primary.default.colour,
				boxShadow: colourScheme.elevation.boxShadow[boxShadowElevationLevel],
				disabledColour: onColour.toColourWithStyleOpacity(colourScheme.disabled.opacity),
				hoverColour: onColour.toColourWithStyleOpacity(colourScheme.hovered.opacity),
				onColour: onColour,
				pulseColour: onColour.toColourWithStyleOpacity(colourScheme.transition.pulse.opacity)
			};
		};
		case ButtonStyle.Outline: {

			const onColour = props.isSelected ? colourScheme.surface.inverse.onColour : colourScheme.surface.variant.onColour;

			return {
				backgroundColour: props.isSelected ? colourScheme.surface.inverse.colour : undefined,
				borderColour: colourScheme.outline.outlineVariant,
				disabledColour: onColour.toColourWithStyleOpacity(colourScheme.disabled.opacity),
				hoverColour: onColour.toColourWithStyleOpacity(colourScheme.hovered.opacity),
				onColour: onColour,
				pulseColour: onColour.toColourWithStyleOpacity(colourScheme.transition.pulse.opacity)
			};
		}
	}
}
