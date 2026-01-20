import type { Extends } from "../../../types/extends.type";

import type { ColourSchemeStyle } from "../enums/colour-scheme-style.type";

/**
 * Colour scheme style with only container colours
 */
export type ColourSchemeStyleContainer = Extends<
	ColourSchemeStyle,
	(
		typeof ColourSchemeStyle.PrimaryContainer |
		typeof ColourSchemeStyle.SecondaryContainer |
		typeof ColourSchemeStyle.TertiaryContainer
	)
>;
