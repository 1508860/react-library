import type { CSSProperties } from "react";
import type { Size } from "@react-library/common";

/**
 * Resolve side sheet panel footer style based on parameters
 */
export function sideSheetPanelFooterStyle(width: Size): CSSProperties {
	return {
		boxSizing: "border-box",
		flexShrink: 0,
		padding: 24,
		width: width
	};
}
