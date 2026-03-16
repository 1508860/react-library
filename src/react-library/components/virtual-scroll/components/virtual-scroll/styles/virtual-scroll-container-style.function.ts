import type { CSSProperties } from "react";

import { Orientation, type Size, type SizePx } from "@react-library/common";

/**
 * Resolve virtual scroll container style based on parameters
 * @param orientation
 * @param childrenSize
 * @param paddingStart
 * @param paddingEnd
 */
export function virtualScrollContainerStyle(orientation: Orientation, childrenSize: Size, paddingStart: SizePx, paddingEnd: SizePx): CSSProperties {
	return {
		boxSizing: "content-box",
		display: "flex",
		flexDirection: orientation === Orientation.Horizontal ? "row" : "column",
		height: orientation === Orientation.Vertical ? childrenSize : "100%",
		paddingTop: orientation === Orientation.Vertical ? paddingStart : 0,
		paddingRight: orientation === Orientation.Horizontal ? paddingEnd : 0,
		paddingBottom: orientation === Orientation.Vertical ? paddingEnd : 0,
		paddingLeft: orientation === Orientation.Horizontal ? paddingStart : 0,
		position: "relative",
		width: orientation === Orientation.Horizontal ? childrenSize : "100%",
	};
};
