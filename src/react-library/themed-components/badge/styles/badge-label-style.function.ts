import type { CSSProperties } from "react";

import type { IColourScheme, IFont, SizePx } from "@react-library/common";

/**
 * Resolve badge label style based on parameters
 * @param colourScheme
 * @param font
 */
export function badgeLabelStyle(colourScheme: IColourScheme, font: IFont): CSSProperties {

	const height: SizePx = 16;
	const paddingSide: SizePx = 4;

	return {
		alignItems: "center",
		backgroundColor: colourScheme.error.default.colour.toColourString(),
		borderRadius: height / 2,
		boxSizing: "border-box",
		color: colourScheme.error.default.onColour.toColourString(),
		display: "inline-flex",
		fontFamily: font.fontFamily,
		fontSize: 11,
		height: height,
		justifyContent: "center",
		minWidth: height,
		paddingLeft: paddingSide,
		paddingRight: paddingSide,
		position: "absolute"
	}
};
