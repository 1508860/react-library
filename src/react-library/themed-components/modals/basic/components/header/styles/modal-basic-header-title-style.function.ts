import type { CSSProperties } from "react";

import type { ColourScheme, Font } from "@react-library/common";

/**
 * Resolve modal basic header title style based on parameters
 * @param colourScheme
 * @param font
 */
export function modalBasicHeaderTitleStyle(colourScheme: ColourScheme, font: Font): CSSProperties {
	return {
		fontFamily: font.fontFamily,
		color: colourScheme.surface.default.onColour.toColourString(),
		fontWeight: 400,
		fontSize: 24,
		maxWidth: "100%"
	};
}
