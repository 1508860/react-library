import type { CSSProperties } from "react";

import { Orientation, toSizeWithUnits, type Font } from "@react-library/common";

import { DemoContentColourSchemeMap } from "../enums/demo-content-colour-scheme.type";
import type { DemoContentProps } from "../types/demo-content-props.type";

export function demoContentStyle(props: DemoContentProps, font: Font): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: DemoContentColourSchemeMap[props.colourScheme].toColourString(),
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
		position: "relative",
		textAlign: "center",
		width: props.width
	};
}
