import type { CSSProperties } from "react";

import type { FloatingButtonGroupPosition } from "../types/floating-button-group-position.type";

/**
 * Resolve floating button group menu button style based on parameters
 * @param position
 */
export function floatingButtonGroupButtonStyle(position: FloatingButtonGroupPosition): CSSProperties {
	return {
		bottom: position.inset.bottom,
		display: "inline-block",
		flexShrink: 0,
		left: position.inset.left,
		padding: position.padding,
		position: "absolute",
		right: position.inset.right,
		top: position.inset.top,
		zIndex: 1
	};
}
