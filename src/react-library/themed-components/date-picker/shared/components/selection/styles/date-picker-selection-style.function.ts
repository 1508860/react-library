import type { CSSProperties } from "react";

/**
 * Resolve date picker selection style
 * @param isDisabled
 * @param isOpen
*/
export function datePickerSelectionStyle(isDisabled: boolean, isOpen: boolean): CSSProperties {
	return {
		alignItems: "center",
		display: "flex",
		flexBasis: 1,
		flexDirection: "row",
		flexGrow: 1,
		flexShrink: 0,
		justifyContent: (isDisabled || isOpen) ? "center" : "space-between"
	};
}
