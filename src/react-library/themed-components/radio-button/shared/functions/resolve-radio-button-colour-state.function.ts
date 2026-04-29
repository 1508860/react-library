import { type ColourScheme } from "@react-library/common";

import type { RadioButtonColourState } from "../types/radio-button-colour-state.type";

/**
 * Resolve {@link RadioButtonColourState} for the radio button component
 * @param isDisabled
 * @param colourScheme
 * @param isErrored
 * @param isChecked
 */
export function resolveRadioButtonColourState(
	isDisabled: boolean,
	colourScheme: ColourScheme,
	isErrored: boolean,
	isChecked: boolean
): RadioButtonColourState {
	if (isDisabled) {
		const disabledColour = colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.38);
		return {
			hoverColour: disabledColour,
			iconColour: colourScheme.surface.default.colour,
			labelColour: colourScheme.surface.default.onColour,
			pulseColour: disabledColour
		};
	}

	if (isErrored) {
		const errorColour = colourScheme.error.default.colour;
		return {
			hoverColour: errorColour.toColourWithStyleOpacity(0.08),
			iconColour: colourScheme.primary.default.onColour,
			labelColour: colourScheme.surface.default.onColour,
			pulseColour: errorColour.toColourWithStyleOpacity(0.1)
		};
	}

	const layerColour = isChecked ? colourScheme.surface.default.onColour : colourScheme.primary.default.colour;
	return {
		hoverColour: layerColour.toColourWithStyleOpacity(0.08),
		iconColour: colourScheme.primary.default.onColour,
		labelColour: colourScheme.surface.default.onColour,
		pulseColour: layerColour.toColourWithStyleOpacity(0.1)
	};
}
