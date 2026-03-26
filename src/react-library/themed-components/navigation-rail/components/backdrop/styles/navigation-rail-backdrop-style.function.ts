import type { CSSProperties } from "react";

/**
 * Resolve navigation rail backdrop style based on parameters
 * @param isExpanded
 */
export function navigationRailBackdropStyle(isExpanded: boolean): CSSProperties {
	return {
		height: isExpanded ? undefined : 0,
		inset: isExpanded ? 0 : undefined,
		position: "absolute",
		width: isExpanded ? undefined : 0
	};
}
