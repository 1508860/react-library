import type { CSSProperties } from "react";

/**
 * Resolve text field select container style
 */
export function textFieldSelectContainerStyle(isHovered: boolean): CSSProperties {
	return {
		backgroundColor: "inherit",
		cursor: isHovered ? "pointer" : undefined,
		position: "relative"
	};
}
