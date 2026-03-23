import { useEffect, useRef, useState } from "react";

import { ColourSchemeContainerLevel, ColourSchemeElevationLevel, useColourSchemeContext, type ColourScheme } from "@react-library/common";

import type { ButtonContainerUseColourStateParam } from "../../shared/components/button-container";
import { ButtonStyle } from "../../shared/enums/button-style.type";
import { isButtonColourStateEqual } from "../../shared/functions/is-button-colour-state-equal.function";
import type { ButtonColourState } from "../../shared/types/button-colour-state.type";
import type { ButtonSplitProps } from "../types/button-split-props.type";

/**
 * Derive the split button colour state based on parameters
 * @param param
 */
export function useButtonSplitColourState(param: ButtonContainerUseColourStateParam<ButtonSplitProps>): [ButtonColourState] {

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

function resolveButtonColourState(param: ButtonContainerUseColourStateParam<ButtonSplitProps>, colourScheme: ColourScheme): ButtonColourState {
	switch (param.config.style) {
		case ButtonStyle.Elevated: {

			const boxShadowElevationLevel: ColourSchemeElevationLevel = (
				param.config.isDisabled ? ColourSchemeElevationLevel.Level0 :
					((!param.isPressed && param.isHovered) ? ColourSchemeElevationLevel.Level2 : ColourSchemeElevationLevel.Level1)
			);

			const onColour = colourScheme.primary.default.colour;

			return {
				backgroundColour: colourScheme.surface.container[ColourSchemeContainerLevel.Low],
				boxShadow: colourScheme.elevation.boxShadow[boxShadowElevationLevel],
				disabledColour: onColour.toColourWithStyleOpacity(colourScheme.disabled.opacity),
				hoverColour: onColour.toColourWithStyleOpacity(colourScheme.hovered.opacity),
				onColour: onColour,
				pulseColour: onColour.toColourWithStyleOpacity(colourScheme.transition.pulse.opacity)
			};
		}
		case ButtonStyle.Filled: {

			const boxShadowElevationLevel: ColourSchemeElevationLevel = (
				(!param.config.isDisabled && !param.isPressed && param.isHovered) ? ColourSchemeElevationLevel.Level1 : ColourSchemeElevationLevel.Level0
			);

			const onColour = colourScheme.primary.default.onColour;

			return {
				backgroundColour: colourScheme.primary.default.colour,
				boxShadow: colourScheme.elevation.boxShadow[boxShadowElevationLevel],
				disabledColour: onColour.toColourWithStyleOpacity(colourScheme.disabled.opacity),
				hoverColour: onColour.toColourWithStyleOpacity(colourScheme.hovered.opacity),
				onColour: onColour,
				pulseColour: onColour.toColourWithStyleOpacity(colourScheme.transition.pulse.opacity)
			};
		}
		case ButtonStyle.Outline: {

			const onColour = colourScheme.surface.variant.onColour;

			return {
				backgroundColour: undefined,
				borderColour: colourScheme.outline.outlineVariant,
				disabledColour: onColour.toColourWithStyleOpacity(colourScheme.disabled.opacity),
				hoverColour: onColour.toColourWithStyleOpacity(colourScheme.hovered.opacity),
				onColour: onColour,
				pulseColour: onColour.toColourWithStyleOpacity(colourScheme.transition.pulse.opacity)
			};
		}
	}
}
