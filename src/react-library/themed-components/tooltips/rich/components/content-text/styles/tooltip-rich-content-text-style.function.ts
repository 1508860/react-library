import type { CSSProperties } from "react";

import type { ColourScheme, Font } from "@react-library/common";

/**
 * Resolve tooltip rich content text style based on parameters
 * @param colourScheme
 * @param font
 */
export function tooltipRichContentTextStyle(colourScheme: ColourScheme, font: Font): CSSProperties {
	return {
		color: colourScheme.surface.variant.onColour.toColourString(),
		display: "block",
		fontFamily: font.fontFamily,
		fontSize: 14,
		fontWeight: 400,
		lineHeight: "20pt"
	};
}
