import type { CSSProperties } from "react";

import type { Size } from "@react-library/common";

/**
 * Resolve icon click effect style based on parameters
 * @param padding
 * @param isHovered
 */
export function iconClickEffectStyle(padding: Size | undefined, isHovered: boolean): CSSProperties {
	return {
		boxSizing: "border-box",
		cursor: isHovered ? "pointer" : undefined,
		flexShrink: 0,
		padding: padding
	};
}
