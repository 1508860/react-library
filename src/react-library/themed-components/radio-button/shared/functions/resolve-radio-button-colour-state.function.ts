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
		const colour = (isChecked ? colourScheme.primary.default.colour : colourScheme.surface.default.onColour);
		const disabledColour = colour.toColourWithStyleOpacity(0.38);
		return {
			hoverColour: disabledColour,
			iconColour: disabledColour,
			labelColour: colourScheme.surface.default.onColour,
			pulseColour: disabledColour
		};
	}

	if (isErrored) {
		const errorColour = colourScheme.error.default.colour;
		return {
			hoverColour: errorColour.toColourWithStyleOpacity(0.08),
			iconColour: errorColour,
			labelColour: errorColour,
			pulseColour: errorColour.toColourWithStyleOpacity(0.1)
		};
	}

	const iconColour = isChecked ? colourScheme.primary.default.colour : colourScheme.surface.variant.onColour;
	const layerColour = isChecked ? colourScheme.primary.default.colour : colourScheme.surface.default.onColour;
	return {
		hoverColour: layerColour.toColourWithStyleOpacity(0.08),
		iconColour: iconColour,
		labelColour: colourScheme.surface.default.onColour,
		pulseColour: layerColour.toColourWithStyleOpacity(0.1)
	};
}
