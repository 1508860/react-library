import type { CSSProperties } from "react";
import { ColourSchemeContainerLevel, type ColourScheme } from "@react-library/common";

/**
 * Resolve navigation rail content style based on parameters
 */
export function navigationRailContentStyle(colourScheme: ColourScheme): CSSProperties {
	return {
		backgroundColor: colourScheme.surface.container[ColourSchemeContainerLevel.Medium].toColourString(),
		display: "block",
		flexGrow: 1,
		flexShrink: 0,
		height: "100%",
		position: "relative",
		zIndex: 0
	};
}
