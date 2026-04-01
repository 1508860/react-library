import type { CSSProperties } from "react";

import type { ColourScheme, Font } from "@react-library/common";

/**
 * Resolve tooltip plain content bosy style based on parameters
 * @param colourScheme
 * @param font
 */
export function tooltipPlainContentBodyStyle(colourScheme: ColourScheme, font: Font): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: colourScheme.surface.inverse.colour.toColourString(),
		borderRadius: 4,
		color: colourScheme.surface.inverse.onColour.toColourString(),
		display: "flex",
		flexDirection: "row",
		fontFamily: font.fontFamily,
		fontWeight: 400,
		maxWidth: 400,
		padding: 8
	};
}
