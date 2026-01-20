import type { CSSProperties } from "react";

import { Orientation, type Size } from "@react-library/common";

/**
 * Resolve view divider separator style based on parameters
 * @param orientation
 * @param size
 */
export function viewDividerSeparatorStyle(orientation: Orientation, size: Size): CSSProperties {
	return {
		cursor: orientation === Orientation.Horizontal ? "col-resize" : "row-resize",
		display: "block",
		flexShrink: 0,
		height: orientation === Orientation.Horizontal ? "100%" : size,
		width: orientation === Orientation.Horizontal ? size : "100%"
	};
}
