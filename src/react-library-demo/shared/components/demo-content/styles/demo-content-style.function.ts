import type { CSSProperties } from "react";

import {
	Orientation,
	toSizeWithUnits,
	type Colour,
	type Font
} from "@react-library/common";

import { DemoContentColourSchemeMap } from "../enums/demo-content-colour-scheme.type";
import type { DemoContentProps } from "../types/demo-content-props.type";

export function demoContentStyle(props: DemoContentProps, font: Font): CSSProperties {

	let backGroundColour: Colour | undefined = undefined;

	if (props.opacity !== undefined) {
		backGroundColour = DemoContentColourSchemeMap[props.colourScheme].toColourWithStyleOpacity(props.opacity);
	} else {
		backGroundColour = DemoContentColourSchemeMap[props.colourScheme];
	}

	return {
		alignItems: "center",
		backgroundColor: backGroundColour?.toColourString(),
		boxSizing: "border-box",
		display: "flex",
		flexDirection: props.orientation === Orientation.Horizontal ? "row" : "column",
		fontFamily: font.fontFamily,
		fontSize: 16,
		gap: 10,
		height: props.height,
		justifyContent: props.justify,
		overflow: props.overflow,
		paddingBottom: props.paddingBottom,
		paddingLeft: `calc(${toSizeWithUnits(props.paddingLeft ?? 0)} + ${toSizeWithUnits(props.indentIndex === undefined ? 0 : (props.indentIndex * 20))})`,
		paddingRight: props.paddingRight,
		paddingTop: props.paddingTop,
		position: props.isAbsolute ? "absolute" : "relative",
		textAlign: "center",
		width: props.width
	};
}
