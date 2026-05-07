import type { CSSProperties } from "react";

import { Orientation, type ColourScheme, type Size } from "@react-library/common";

/**
 * Resolve divider style based on parameters
 * @param marginAfter
 * @param marginBefore
 * @param orientation
 * @param colourScheme
 */
export function dividerStyle(
	marginAfter: Size | undefined,
	marginBefore: Size | undefined,
	orientation: Orientation,
	colourScheme: ColourScheme
): CSSProperties {
	return {
		backgroundColor: colourScheme.outline.outlineVariant.toColourString(),
		display: "block",
		height: orientation === Orientation.Vertical ? "100%" : 1,
		marginBottom: orientation === Orientation.Horizontal ? marginAfter : undefined,
		marginLeft: orientation === Orientation.Vertical ? marginBefore : undefined,
		marginRight: orientation === Orientation.Vertical ? marginAfter : undefined,
		marginTop: orientation === Orientation.Horizontal ? marginBefore : undefined,
		width: orientation === Orientation.Horizontal ? "100%" : 1
	};
}
