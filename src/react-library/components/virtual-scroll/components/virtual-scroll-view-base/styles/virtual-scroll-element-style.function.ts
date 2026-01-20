import type { CSSProperties } from "react";

import { Orientation, type Size } from "@react-library/common";

/**
 * Get styling for the virtual scroll element container
 * @param orientation which direction is the scroll being observed for
 * @param elementSize the size of the rendered element, in pixels
 */
export function virtualScrollElementStyle(orientation: Orientation, elementSize: Size): CSSProperties {
	return {
		flexShrink: 0,
		height: orientation === Orientation.Horizontal ? "100%" : elementSize,
		position: "relative",
		width: orientation === Orientation.Vertical ? "100%" : elementSize
	};
};
