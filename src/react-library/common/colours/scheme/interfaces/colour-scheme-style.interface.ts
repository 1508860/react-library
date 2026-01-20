import type { ColourSchemeStyle } from "../enums/colour-scheme-style.type";

/**
 * Describes colour scheme style
 */
export interface IColourSchemeStyle<TColourSchemeStyle extends ColourSchemeStyle> {
	colourSchemeStyle: TColourSchemeStyle;
}
