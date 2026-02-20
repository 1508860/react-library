import type { CSSProperties } from "react";
import type { Size } from "@react-library/common";

/**
 * Resolve side sheet panel header style based on parameters
 */
export function sideSheetPanelHeaderStyle(width: Size): CSSProperties {
	return {
		alignItems: "center",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "row",
		flexShrink: 0,
		gap: 12,
		padding: 24,
		width: width
	};
}
