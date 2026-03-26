import type { CSSProperties } from "react";

import type { Colour, Size } from "@react-library/common";

/**
 * Resolve button content container style based on parameters
 * @param backgroundColour
 * @param columnGap
 * @param fontSize
 * @param paddingHorizontal
 */
export function buttonContentContainerStyle(
	backgroundColour: Colour | undefined,
	columnGap: Size | undefined,
	fontSize: Size | undefined,
	paddingHorizontal: Size | undefined
): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: backgroundColour?.toColourString(),
		boxSizing: "border-box",
		columnGap: columnGap,
		display: "inline-flex",
		flexDirection: "row",
		fontSize: fontSize,
		height: "100%",
		justifyContent: "center",
		paddingLeft: paddingHorizontal,
		paddingRight: paddingHorizontal,
		position: "relative",
		width: "100%"
	};
}
