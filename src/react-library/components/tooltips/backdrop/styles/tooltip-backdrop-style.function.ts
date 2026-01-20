import type { CSSProperties } from "react";

/**
 * Resolve tooltip backdrop style based on parameters
 */
export function tooltipBackdropStyle(): CSSProperties {
	return {
		backgroundColor: "#00000000",
		display: "block",
		inset: 0,
		position: "absolute"
	};
}
