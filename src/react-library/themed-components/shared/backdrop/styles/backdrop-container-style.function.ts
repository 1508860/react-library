import type { CSSProperties } from "react";

/**
 * Resolve backdrop container style based on parameters
 * @param isAbsolute
 */
export function backdropContainerStyle(isAbsolute: boolean | undefined): CSSProperties {
	return {
		height: "100%",
		inset: isAbsolute ? 0 : undefined,
		overflow: "hidden",
		position: isAbsolute ? "absolute" : undefined,
		width: "100%"
	};
}
