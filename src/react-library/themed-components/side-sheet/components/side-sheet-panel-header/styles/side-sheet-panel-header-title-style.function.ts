import type { CSSProperties } from "react";

import type { ColourScheme, Font } from "@react-library/common";

/**
 * Resolve side sheet panel header title style based on parameters
 * @param colourScheme
 * @param font
 */
export function sideSheetPanelHeaderTitleStyle(colourScheme: ColourScheme, font: Font): CSSProperties {
	return {
		color: colourScheme.surface.variant.onColour.toColourString(),
		flexGrow: 1,
		fontFamily: font.fontFamily,
		fontSize: 22,
		fontWeight: 400
	};
}
