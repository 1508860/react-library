import type { CSSProperties } from "react";

import type { Size } from "@react-library/common";

/**
 * Resolve icon click style based on parameters
 * @param padding
 * @param isHovered
 */
export function iconClickStyle(padding: Size | undefined, isHovered: boolean): CSSProperties {
	return {
		boxSizing: "border-box",
		cursor: isHovered ? "pointer" : undefined,
		flexShrink: 0,
		padding: padding
	};
}
