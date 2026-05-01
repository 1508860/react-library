import { type ColourScheme } from "@react-library/common";

import type { SwitchColourState } from "../types/switch-colour-state.type";

/**
 * Resolve {@link SwitchColourState} for the switch component
 * @param isDisabled
 * @param value
 * @param colourScheme
 * @param isErrored
 */
export function resolveSwitchColourState(
	isDisabled: boolean,
	value: boolean,
	colourScheme: ColourScheme,
	isErrored: boolean,
): SwitchColourState {
	if (isDisabled) {
		const backgroundColour = value ? colourScheme.surface.default.onColour : colourScheme.surface.container.highest;
		const iconColour = value ? colourScheme.surface.default.onColour : colourScheme.surface.container.highest;

		return {
			backgroundColour: backgroundColour.toColourWithStyleOpacity(0.12),
			borderColour: colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.12),
			hoverColour: backgroundColour,
			iconColour: iconColour.toColourWithStyleOpacity(0.38),
			labelColour: colourScheme.surface.default.onColour,
			thumbColour: value ? colourScheme.surface.default.colour : colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.38)
		};
	}

	if (isErrored) {
		const errorColour = colourScheme.error.default.colour;
		return {
			backgroundColour: colourScheme.surface.container.highest,
			borderColour: errorColour,
			hoverColour: errorColour.toColourWithStyleOpacity(0.08),
			iconColour: colourScheme.error.default.onColour,
			labelColour: errorColour,
			thumbColour: errorColour
		};
	}

	const hoverColour = value ? colourScheme.primary.default.colour : colourScheme.surface.default.onColour;

	return {
		backgroundColour: value ? colourScheme.primary.default.colour : colourScheme.surface.container.highest,
		borderColour: value ? colourScheme.primary.default.colour : colourScheme.outline.outline,
		hoverColour: hoverColour.toColourWithStyleOpacity(0.08),
		iconColour: value ? colourScheme.primary.default.colour : colourScheme.surface.container.highest,
		labelColour: colourScheme.surface.default.onColour,
		thumbColour: value ? colourScheme.primary.default.onColour : colourScheme.outline.outline
	};
}
