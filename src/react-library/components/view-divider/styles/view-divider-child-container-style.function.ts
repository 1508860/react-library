import type { CSSProperties } from "react";

import { Orientation, toSizeWithUnits, type Size, type SizePx, type SizeWithUnits } from "@react-library/common";

import { ViewDividerView } from "../enums/view-divider-view.type";
import type { ViewDividerSize } from "../types/view-divider-size.type";

/**
 * Resolve view divider child container style based on parameters
 * @param viewDividerView
 * @param orientation
 * @param size
 * @param minSizeStart
 * @param minSizeEnd
 */
export function viewDividerChildContainerStyle(
	viewDividerView: ViewDividerView,
	orientation: Orientation,
	size: ViewDividerSize,
	minSizeStart: Size | undefined,
	minSizeEnd: Size | undefined
): CSSProperties {

	const minSize: SizeWithUnits = toSizeWithUnits((viewDividerView === ViewDividerView.End ? minSizeEnd : minSizeStart) ?? 0);
	let flexGrow: number | undefined = undefined;
	let staticViewSize: string | undefined = undefined;

	if (size.type === "percent") {
		flexGrow = (viewDividerView === ViewDividerView.End ? (size.denominator - size.numerator) : size.numerator);
	} else if (size.type === "static") {
		if (size.staticView === viewDividerView) {
			const otherMinSize: SizeWithUnits = toSizeWithUnits((viewDividerView === ViewDividerView.End ? minSizeStart : minSizeEnd) ?? 0);
			const thisViewSize: SizeWithUnits = toSizeWithUnits(size.staticView === ViewDividerView.End ? size.endViewSize : size.startViewSize);
			const totalViewSize: SizePx = (size.startViewSize + size.endViewSize);
			staticViewSize = `clamp(${minSize ?? 0}, ${thisViewSize}, calc(${toSizeWithUnits(totalViewSize)} - ${otherMinSize ?? 0}))`;
		} else {
			flexGrow = 1;
		}
	}

	return {
		display: "block",
		flexBasis: size.type === "percent" ? 0 : undefined,
		flexGrow: flexGrow,
		flexShrink: 0,
		height: orientation === Orientation.Horizontal ? "100%" : staticViewSize,
		minHeight: orientation === Orientation.Horizontal ? undefined : minSize,
		minWidth: orientation === Orientation.Horizontal ? minSize : undefined,
		overflow: "hidden",
		position: "relative",
		width: orientation === Orientation.Horizontal ? staticViewSize : "100%"
	};
}
