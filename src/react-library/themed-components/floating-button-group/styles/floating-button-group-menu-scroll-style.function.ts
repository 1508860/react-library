import type { CSSProperties } from "react";
import type { FloatingButtonGroupPosition } from "../types/floating-button-group-position.type";


/**
 * Resolve floating button group menu scroll style based on parameters
 * @param position
 */
export function floatingButtonGroupMenuScrollStyle(position: FloatingButtonGroupPosition): CSSProperties {
	return {
		bottom: position.inset.bottom,
		left: position.inset.left,
		maxHeight: "100%",
		maxWidth: "100%",
		overflow: "auto",
		position: "absolute",
		right: position.inset.right,
		scrollbarWidth: "none",
		top: position.inset.top,
		zIndex: 0
	};
}
