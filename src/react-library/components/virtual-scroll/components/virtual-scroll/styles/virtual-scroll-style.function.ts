import type { CSSProperties } from "react";

import { Orientation } from "@react-library/common";

/**
 * Resolve virtual scroll style based on parameters
 * @param orientation
 */
export function virtualScrollStyle(orientation: Orientation): CSSProperties {
	return {
		height: "100%",
		width: "100%",
		overflowX: orientation === Orientation.Horizontal ? "auto" : "unset",
		overflowY: orientation === Orientation.Vertical ? "auto" : "unset"
	};
};
