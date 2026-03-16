import type { CSSProperties } from "react";

import { Orientation } from "@react-library/common";

import type { VirtualScrollItemSize } from "../../../types/virtual-scroll-item-size.type";

/**
 * Resolve virtual scroll item style based on parameters
 * @param orientation
 * @param size
 */
export function virtualScrollItemStyle(orientation: Orientation, size: VirtualScrollItemSize): CSSProperties {
	return {
		flexShrink: 0,
		height: orientation === Orientation.Horizontal ? "100%" : size,
		position: "relative",
		width: orientation === Orientation.Vertical ? "100%" : size
	};
};
