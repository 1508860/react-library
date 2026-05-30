import type { CSSProperties } from "react";

/**
 * Resolve date picker selection button style
 * @param isDisabled
 */
export function datePickerSelectionButtonStyle(isDisabled: boolean): CSSProperties {
	return {
		alignItems: "center",
		cursor: !isDisabled ? "pointer" : undefined,
		display: "flex",
		flexDirection: "row",
		flexShrink: 0,
		justifyContent: "center"
	};
}
