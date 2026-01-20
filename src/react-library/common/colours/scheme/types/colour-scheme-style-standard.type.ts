import type { Extends } from "../../../types/extends.type";

import type { ColourSchemeStyle } from "../enums/colour-scheme-style.type";

/**
 * Colour scheme style with only standard colours
 */
export type ColourSchemeStyleStandard = Extends<
	ColourSchemeStyle,
	(
		typeof ColourSchemeStyle.Primary |
		typeof ColourSchemeStyle.Secondary |
		typeof ColourSchemeStyle.Tertiary
	)
>;
