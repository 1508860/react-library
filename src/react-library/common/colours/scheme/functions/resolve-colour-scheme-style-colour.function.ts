import { ColourSchemeStyle } from "../enums/colour-scheme-style.type";
import type { ColourScheme } from "../interfaces/colour-scheme.interface";
import type { ColourSchemeStyleColour } from "../types/colour-scheme-style-colour.type";

/**
 * Resolve colour scheme style colour based on {@link ColourSchemeStyle}
 * @param colourScheme
 * @param colourSchemeStyle
 */
export function resolveColourSchemeStyleColour(
	colourScheme: ColourScheme,
	colourSchemeStyle: ColourSchemeStyle
): ColourSchemeStyleColour {
	switch (colourSchemeStyle) {
		case ColourSchemeStyle.Primary:
			return colourScheme.primary.default;
		case ColourSchemeStyle.PrimaryContainer:
			return colourScheme.primary.container;
		case ColourSchemeStyle.Secondary:
			return colourScheme.secondary.default;
		case ColourSchemeStyle.SecondaryContainer:
			return colourScheme.secondary.container;
		case ColourSchemeStyle.Tertiary:
			return colourScheme.tertiary.default;
		case ColourSchemeStyle.TertiaryContainer:
			return colourScheme.tertiary.container;
	}
};
