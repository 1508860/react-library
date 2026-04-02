import { useEffect, useRef, useState } from "react";

import { useColourSchemeContext, type ColourScheme } from "@react-library/common";

import type { ButtonContainerUseColourStateParam } from "../../shared/components/button-container";
import { ButtonStyle } from "../../shared/enums/button-style.type";
import { isButtonColourStateEqual } from "../../shared/functions/is-button-colour-state-equal.function";
import type { ButtonColourState } from "../../shared/types/button-colour-state.type";
import type { ButtonTextProps } from "../types/button-text-props.type";

/**
 * Derive the text button colour state based on parameters
 * @param param
 */
export function useButtonTextColourState(param: ButtonContainerUseColourStateParam<ButtonTextProps>): [ButtonColourState] {

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

function resolveButtonColourState(param: ButtonContainerUseColourStateParam<ButtonTextProps>, colourScheme: ColourScheme): ButtonColourState {
	switch (param.config.style) {
		case ButtonStyle.Text: {
			const onColour = colourScheme.primary.default.colour;

			return {
				disabledColour: onColour.toColourWithStyleOpacity(colourScheme.disabled.opacity),
				hoverColour: onColour.toColourWithStyleOpacity(colourScheme.hovered.opacity),
				onColour: onColour,
				pulseColour: onColour.toColourWithStyleOpacity(colourScheme.transition.pulse.opacity)
			};
		}
	}
}
