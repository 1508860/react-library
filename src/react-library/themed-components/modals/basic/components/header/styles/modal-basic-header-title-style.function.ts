import type { CSSProperties } from "react";

import type { ColourScheme, Font } from "@react-library/common";

/**
 * Resolve modal basic header title style based on parameters
 * @param colourScheme
 * @param font
 */
export function modalBasicHeaderTitleStyle(colourScheme: ColourScheme, font: Font): CSSProperties {
	return {
		color: colourScheme.surface.default.onColour.toColourString(),
		fontFamily: font.fontFamily,
		fontSize: 24,
		fontWeight: 400,
		maxWidth: "100%"
	};
}
