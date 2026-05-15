import type { CSSProperties } from "react";

import type { Size } from "@react-library/common";

/**
 * Resolve icon container style based on parameters
 * @param orientation
 * @param size
 */
export function iconContainerStyle(size: Size): CSSProperties {
	return {
		display: "block",
		flexShrink: 0,
		height: size,
		position: "relative",
		width: size
	};
}
