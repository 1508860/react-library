import type { Size } from "@react-library/common";
import type { CSSProperties } from "react";

/**
 * Resolve form style
 * @param gap
 */
export function formStyle(gap: Size): CSSProperties {
	return {
		alignItems: "stretch",
		backgroundColor: "inherit",
		display: "flex",
		flexDirection: "column",
		gap: gap,
		height: "100%",
		width: "100%"
	};
};
