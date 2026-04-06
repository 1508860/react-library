import type { CSSProperties } from "react";

import type { ColourScheme } from "@react-library/common";

/**
 * Resolve tooltip rich content container style based on parameters
 * @param colourScheme
 */
export function tooltipRichContentContainerStyle(colourScheme: ColourScheme): CSSProperties {
	return {
		alignItems: "start",
		backgroundColor: colourScheme.surface.container.medium.toColourString(),
		borderRadius: 12,
		boxShadow: colourScheme.elevation.boxShadow["level-2"],
		boxSizing: "border-box",
		color: colourScheme.surface.variant.onColour.toColourString(),
		display: "flex",
		flexDirection: "column",
		maxWidth: 400,
		padding: 12
	};
}
