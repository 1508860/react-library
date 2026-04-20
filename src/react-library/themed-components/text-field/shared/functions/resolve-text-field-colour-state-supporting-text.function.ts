import type { ColourScheme } from "@react-library/common";

import type { TextFieldColourStateSupportingText } from "../types/text-field-colour-state.type";

/**
 * Resolve {@link TextFieldColourStateSupportingText} for a text field supporting text
 * @param colourScheme
 */
export function resolveTextFieldColourStateSupportingText(colourScheme: ColourScheme): TextFieldColourStateSupportingText {
	return {
		isErrored: {
			false: colourScheme.surface.variant.onColour,
			true: colourScheme.error.default.colour
		}
	};
}
