import { useEffect, useRef, useState } from "react";

import { ColourSchemeContainerLevel, ColourSchemeElevationLevel, useColourSchemeContext, type ColourScheme } from "@react-library/common";

import type { ButtonContainerUseColourStateParam } from "../../shared/components/button-container";
import { ButtonStyle } from "../../shared/enums/button-style.type";
import { isButtonColourStateEqual } from "../../shared/functions/is-button-colour-state-equal.function";
import type { ButtonColourState } from "../../shared/types/button-colour-state.type";
import type { ButtonSelectionProps } from "../types/button-selection-props.type";

/**
 * Derive the selection button colour state based on parameters
 * @param param
 */
export function useButtonSelectionColourState(param: ButtonContainerUseColourStateParam<ButtonSelectionProps>): [ButtonColourState] {

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

function resolveButtonColourState(param: ButtonContainerUseColourStateParam<ButtonSelectionProps>, colourScheme: ColourScheme): ButtonColourState {
	switch (param.config.style) {
		case ButtonStyle.Elevated: {

			const boxShadowElevationLevel: ColourSchemeElevationLevel = (
				param.config.isDisabled ? ColourSchemeElevationLevel.Level0 :
					((!param.isPressed && param.isHovered) ? ColourSchemeElevationLevel.Level2 : ColourSchemeElevationLevel.Level1)
			);

			const onColour = param.config.isSelected ? colourScheme.primary.default.onColour : colourScheme.primary.default.colour;

			return {
				backgroundColour: param.config.isSelected ? colourScheme.primary.default.colour : colourScheme.surface.container[ColourSchemeContainerLevel.Low],
				boxShadow: colourScheme.elevation.boxShadow[boxShadowElevationLevel],
				disabledColour: onColour.toColourWithStyleOpacity(colourScheme.disabled.opacity),
				hoverColour: onColour.toColourWithStyleOpacity(colourScheme.hovered.opacity),
				onColour: onColour,
				pulseColour: onColour.toColourWithStyleOpacity(colourScheme.transition.pulse.opacity)
			};
		};
		case ButtonStyle.Filled: {

			const boxShadowElevationLevel: ColourSchemeElevationLevel = (
				(!param.config.isDisabled && !param.isPressed && param.isHovered) ? ColourSchemeElevationLevel.Level1 : ColourSchemeElevationLevel.Level0
			);

			const onColour = !param.config.isSelected ? colourScheme.surface.variant.onColour : colourScheme.primary.default.onColour;

			return {
				backgroundColour: !param.config.isSelected ? colourScheme.surface.container[ColourSchemeContainerLevel.Medium] : colourScheme.primary.default.colour,
				boxShadow: colourScheme.elevation.boxShadow[boxShadowElevationLevel],
				disabledColour: onColour.toColourWithStyleOpacity(colourScheme.disabled.opacity),
				hoverColour: onColour.toColourWithStyleOpacity(colourScheme.hovered.opacity),
				onColour: onColour,
				pulseColour: onColour.toColourWithStyleOpacity(colourScheme.transition.pulse.opacity)
			};
		};
		case ButtonStyle.Outline: {

			const onColour = param.config.isSelected ? colourScheme.surface.inverse.onColour : colourScheme.surface.variant.onColour;

			return {
				backgroundColour: param.config.isSelected ? colourScheme.surface.inverse.colour : undefined,
				borderColour: colourScheme.outline.outlineVariant,
				disabledColour: onColour.toColourWithStyleOpacity(colourScheme.disabled.opacity),
				hoverColour: onColour.toColourWithStyleOpacity(colourScheme.hovered.opacity),
				onColour: onColour,
				pulseColour: onColour.toColourWithStyleOpacity(colourScheme.transition.pulse.opacity)
			};
		}
	}
}
