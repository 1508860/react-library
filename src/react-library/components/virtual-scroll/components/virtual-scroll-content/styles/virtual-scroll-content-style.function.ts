import type { CSSProperties } from "react";

import { Orientation, type Size, type SizePx } from "@react-library/common";

import type { VirtualScrollContentSize } from "../../../types/virtual-scroll-content-size.type";
import type { VirtualScrollOrientation } from "../../../types/virtual-scroll-orientation.type";

/**
 * Resolve virtual scroll content style based on parameters
 * @param orientation
 * @param contentWidth
 * @param size
 */
export function virtualScrollContentStyle(
	orientation: VirtualScrollOrientation,
	contentWidth: Size | undefined,
	size: VirtualScrollContentSize
): CSSProperties {

	const totalSize: SizePx = (size.childrenSize + size.paddingStart + size.paddingEnd);

	return {
		height: orientation === Orientation.Vertical ? totalSize : (contentWidth ?? "100%"),
		position: "relative",
		width: orientation === Orientation.Horizontal ? totalSize : (contentWidth ?? "100%")
	};
};
