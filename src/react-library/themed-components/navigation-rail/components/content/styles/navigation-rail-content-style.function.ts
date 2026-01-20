import type { CSSProperties } from "react";
import type { IColourScheme } from "@react-library/common";

/**
 * Resolve navigation rail contetnt style based on parameters
 */
export function navigationRailContentStyle(colourScheme: IColourScheme): CSSProperties {
	return {
		backgroundColor: colourScheme.surface.container.default.toColourString(),
		display: "block",
		flexGrow: 1,
		flexShrink: 0,
		height: "100%",
		position: "relative",
		zIndex: 0
	};
}
