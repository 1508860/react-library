import type { CSSProperties } from "react";

import { Orientation } from "@react-library/common";

import type { VirtualScrollContentSize } from "../types/virtual-scroll-content-size.type";

/**
 * Resolve virtual scroll content container style based on parameters
 * @param orientation
 * @param size
 */
export function virtualScrollContentContainerStyle(orientation: Orientation, size: VirtualScrollContentSize): CSSProperties {
	return {
		boxSizing: "content-box",
		display: "flex",
		flexDirection: orientation === Orientation.Horizontal ? "row" : "column",
		height: orientation === Orientation.Vertical ? size.childrenSize : "100%",
		paddingTop: orientation === Orientation.Vertical ? size.paddingStart : 0,
		paddingRight: orientation === Orientation.Horizontal ? size.paddingEnd : 0,
		paddingBottom: orientation === Orientation.Vertical ? size.paddingEnd : 0,
		paddingLeft: orientation === Orientation.Horizontal ? size.paddingStart : 0,
		position: "relative",
		width: orientation === Orientation.Horizontal ? size.childrenSize : "100%"
	};
};
