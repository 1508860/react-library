import type { CSSProperties } from "react";

import { Orientation, toSizeWithUnits, type Size } from "@react-library/common";

/**
 * Resolve view divider container style based on parameters
 * @param orientation
 * @param separatorSize
 * @param minSizeStart
 * @param minSizeEnd
 */
export function viewDividerContainerStyle(
	orientation: Orientation,
	separatorSize: Size,
	minSizeStart: Size | undefined,
	minSizeEnd: Size | undefined
): CSSProperties {

	let minSize: string | undefined = undefined;

	if (!!minSizeStart && !!minSizeEnd) {
		minSize = `calc(${toSizeWithUnits(separatorSize)} + ${toSizeWithUnits(minSizeStart)} + ${toSizeWithUnits(minSizeEnd)})`;
	} else if (!!minSizeStart && !minSizeEnd) {
		minSize = `calc(${toSizeWithUnits(separatorSize)} + ${toSizeWithUnits(minSizeStart)})`;
	}
	else if (!minSizeStart && !!minSizeEnd) {
		minSize = `calc(${toSizeWithUnits(separatorSize)} + ${toSizeWithUnits(minSizeEnd)})`;
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
