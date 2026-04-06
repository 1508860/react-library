import type { CSSProperties } from "react";

import type { ColourScheme, Font } from "@react-library/common";

/**
 * Resolve tooltip rich content header style based on parameters
 * @param colourScheme
 * @param font
 */
export function tooltipRichContentHeaderStyle(colourScheme: ColourScheme, font: Font): CSSProperties {
	return {
		color: colourScheme.surface.variant.onColour.toColourString(),
		display: "block",
		fontFamily: font.fontFamily,
		fontSize: 16,
		fontWeight: "bold",
		lineHeight: "20pt"
	};
}
