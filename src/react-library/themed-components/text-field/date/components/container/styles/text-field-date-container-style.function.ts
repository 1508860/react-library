import type { CSSProperties } from "react";

/**
 * Resolve text field date container style
 */
export function textFieldDateContainerStyle(isHovered: boolean): CSSProperties {
	return {
		backgroundColor: "inherit",
		cursor: isHovered ? "pointer" : undefined,
		position: "relative"
	};
}
