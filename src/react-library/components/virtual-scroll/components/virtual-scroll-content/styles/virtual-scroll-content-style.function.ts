import type { CSSProperties } from "react";

import { Orientation, type SizePx } from "@react-library/common";

import type { VirtualScrollContentSize } from "../../../types/virtual-scroll-content-size.type";

/**
 * Resolve virtual scroll content style based on parameters
 * @param orientation
 * @param size
 */
export function virtualScrollContentStyle(orientation: Orientation, size: VirtualScrollContentSize): CSSProperties {

	const totalSize: SizePx = (size.childrenSize + size.paddingStart + size.paddingEnd);

	return {
		height: orientation === Orientation.Vertical ? totalSize : "100%",
		position: "relative",
		width: orientation === Orientation.Horizontal ? totalSize : "100%"
	};
};
