import type { CSSProperties } from "react";

import { SideSheetPosition } from "../../../enums/side-sheet-position.type";

/**
 * Resolve Side sheet standard style based on parameters
 */
export function sideSheetStandardStyle(position: SideSheetPosition): CSSProperties {
	return {
		alignItems: "stretch",
		display: "flex",
		flexDirection: position === SideSheetPosition.End ? "row" : "row-reverse",
		height: "100%",
		width: "100%"
	};
}
