import type { CSSProperties } from "react";

import { Orientation } from "@react-library/common";

import type { VirtualScrollContentSize } from "../../../types/virtual-scroll-content-size.type";

/**
 * Resolve virtual scroll content child style based on parameters
 * @param orientation
 * @param size
 */
export function virtualScrollContentChildStyle(orientation: Orientation, size: VirtualScrollContentSize): CSSProperties {
	return {
		boxSizing: "border-box",
		display: "flex",
		flexDirection: orientation === Orientation.Horizontal ? "row" : "column",
		height: orientation === Orientation.Vertical ? size.childrenSize : "100%",
		overflow: "hidden",
		position: "absolute",
		left: orientation === Orientation.Horizontal ? size.paddingStart : 0,
		top: orientation === Orientation.Vertical ? size.paddingStart : 0,
		width: orientation === Orientation.Horizontal ? size.childrenSize : "100%"
	};
};
