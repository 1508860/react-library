import type { CSSProperties } from "react";

import { Orientation } from "@react-library/common";

/**
 * Get styling for the virtual scroll container
 * @param orientation which direction is the scroll being observed for
 */
export function virtualScrollContainerStyle(orientation: Orientation): CSSProperties {
	return {
		height: "100%",
		width: "100%",
		overflowX: orientation === Orientation.Horizontal ? "auto" : "unset",
		overflowY: orientation === Orientation.Vertical ? "auto" : "unset"
	};
};
