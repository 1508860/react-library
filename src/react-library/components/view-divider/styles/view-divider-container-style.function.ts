import type { CSSProperties } from "react";

import { Orientation, toSizeWithUnits, type Size } from "@react-library/common";

/**
 * Resolve view divider container style based on parameters
 * @param orientation
 * @param separatorSize
 * @param startMinSize
 * @param endMinSize
 */
export function viewDividerContainerStyle(
	orientation: Orientation,
	separatorSize: Size,
	startMinSize: Size | undefined,
	endMinSize: Size | undefined
): CSSProperties {

	let minSize: string | undefined = undefined;

	if (!!startMinSize && !!endMinSize) {
		minSize = `calc(${toSizeWithUnits(separatorSize)} + ${toSizeWithUnits(startMinSize)} + ${toSizeWithUnits(endMinSize)})`;
	} else if (!!startMinSize && !endMinSize) {
		minSize = `calc(${toSizeWithUnits(separatorSize)} + ${toSizeWithUnits(startMinSize)})`;
	}
	else if (!startMinSize && !!endMinSize) {
		minSize = `calc(${toSizeWithUnits(separatorSize)} + ${toSizeWithUnits(endMinSize)})`;
	} else {
		minSize = toSizeWithUnits(separatorSize);
	}

	return {
		display: "flex",
		flexDirection: orientation === Orientation.Horizontal ? "row" : "column",
		height: "100%",
		minHeight: orientation === Orientation.Horizontal ? undefined : minSize,
		minWidth: orientation === Orientation.Horizontal ? minSize : undefined,
		width: "100%"
	};
}
