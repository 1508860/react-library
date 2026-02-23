import type { CSSProperties } from "react";
import type { Size } from "@react-library/common";

/**
 * Resolve side sheet panel body style based on parameters
 */
export function sideSheetPanelBodyStyle(width: Size): CSSProperties {
	return {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		flexShrink: 0,
		height: 0,
		overflowY: "auto",
		scrollbarWidth: "none",
		width: width
	};
}
