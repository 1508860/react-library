import type { CSSProperties } from "react";

import { Orientation, type Size, type SizePx } from "@react-library/common";

/**
 * Get styling for the virtual scroll element container
 * @param orientation which direction is the scroll being observed for
 * @param paddingStart size of padding at the start of the elements container to offset elements not being rendered, in pixels
 * @param paddingEnd size of padding at the end of the elements container to offset elements not being rendered, in pixels
 */
export function virtualScrollElementContainerStyle(orientation: Orientation, childrenSize: Size, paddingStart: SizePx, paddingEnd: SizePx): CSSProperties {
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
