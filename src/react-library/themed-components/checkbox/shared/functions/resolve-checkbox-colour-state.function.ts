import { type ColourScheme } from "@react-library/common";

import { CheckboxSelectedState } from "../enums/checkbox-selected-state.type";
import type { CheckboxColourState } from "../types/checkbox-colour-state.type";

/**
 * Resolve {@link CheckboxColourState} for the checkbox component
 * @param isDisabled
 * @param colourScheme
 * @param isErrored
 * @param selectedState
 */
export function resolveCheckboxColourState(
	isDisabled: boolean,
	colourScheme: ColourScheme,
	isErrored: boolean,
	selectedState: CheckboxSelectedState
): CheckboxColourState {
	if (isDisabled) {
		const disabledColour = colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.38);
		return {
			backgroundColour: selectedState === CheckboxSelectedState.UnSelected ? undefined : disabledColour,
			borderColour: selectedState === CheckboxSelectedState.UnSelected ? disabledColour : undefined,
			hoverColour: disabledColour,
			iconColour: colourScheme.surface.default.colour,
			labelColour: colourScheme.surface.default.onColour,
			pulseColour: disabledColour
		};
	}

	if (isErrored) {
		const errorColour = colourScheme.error.default.colour;
		return {
			backgroundColour: selectedState === CheckboxSelectedState.UnSelected ? undefined : errorColour,
			borderColour: selectedState === CheckboxSelectedState.UnSelected ? errorColour : undefined,
			hoverColour: errorColour.toColourWithStyleOpacity(0.08),
			iconColour: colourScheme.primary.default.onColour,
			labelColour: colourScheme.surface.default.onColour,
			pulseColour: errorColour.toColourWithStyleOpacity(0.1)
		};
	}

	const layerColour = selectedState === CheckboxSelectedState.UnSelected ? colourScheme.surface.default.onColour : colourScheme.primary.default.colour;
	return {
		backgroundColour: selectedState === CheckboxSelectedState.UnSelected ? undefined : colourScheme.primary.default.colour,
		borderColour: selectedState === CheckboxSelectedState.UnSelected ? colourScheme.surface.variant.onColour : undefined,
		hoverColour: layerColour.toColourWithStyleOpacity(0.08),
		iconColour: colourScheme.primary.default.onColour,
		labelColour: colourScheme.surface.default.onColour,
		pulseColour: layerColour.toColourWithStyleOpacity(0.1)
	};
}
