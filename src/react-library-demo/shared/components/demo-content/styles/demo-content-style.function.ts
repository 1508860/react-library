import type { CSSProperties } from "react";

import { Orientation, type Font } from "@react-library/common";

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
		paddingLeft: props.indentIndex === undefined ? undefined : (props.indentIndex * 20),
		textAlign: "center",
		width: props.width
	};
}
