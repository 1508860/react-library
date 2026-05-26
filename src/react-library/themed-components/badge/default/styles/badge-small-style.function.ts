import type { CSSProperties } from "react";
import type { ColourScheme, SizePx } from "@react-library/common";

/**
 * Resolve badge small style based on parameters
 * @param colourScheme
 */
export function badgeSmallStyle(colourScheme: ColourScheme): CSSProperties {

	const size: SizePx = 6;

	return {
		backgroundColor: colourScheme.error.default.colour.toColourString(),
		borderRadius: size / 2,
		height: size,
		width: size
	}
};
