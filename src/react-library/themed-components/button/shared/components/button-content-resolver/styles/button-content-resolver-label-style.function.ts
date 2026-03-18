import type { CSSProperties } from "react";

import type { Colour, Font } from "@react-library/common";

/**
 * Resolve button content resolver label style based on parameters
 * @param color
 * @param font
 */
export function buttonContentResolverLabelStyle(colour: Colour, font: Font): CSSProperties {
	return {
		color: colour.toColourString(),
		fontFamily: font.fontFamily,
		fontSize: "inherit",
		whiteSpace: "nowrap"
	};
}
