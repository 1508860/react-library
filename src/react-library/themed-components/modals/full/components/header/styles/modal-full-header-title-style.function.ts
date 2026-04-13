import type { CSSProperties } from "react";

import type { ColourScheme, Font } from "@react-library/common";

/**
 * Resolve modal full header title style based on parameters
 * @param colourScheme
 * @param font
 */
export function modalFullHeaderTitleStyle(colourScheme: ColourScheme, font: Font): CSSProperties {
	return {
		color: colourScheme.surface.default.onColour.toColourString(),
		flexGrow: 1,
		fontFamily: font.fontFamily,
		fontSize: 22,
		fontWeight: 400,
		minWidth: 0
	};
}
