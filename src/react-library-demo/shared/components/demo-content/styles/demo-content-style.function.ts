import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { DemoContentColourSchemeMap } from "../enums/demo-content-colour-scheme.type";
import type { DemoContentProps } from "../types/demo-content-props.type";

export function demoContentStyle(props: DemoContentProps, font: Font): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: DemoContentColourSchemeMap[props.colourScheme].toColourString(),
		display: "flex",
		flexDirection: "column",
		fontFamily: font.fontFamily,
		fontSize: 16,
		gap: 10,
		height: props.height,
		justifyContent: "center",
		textAlign: "center",
		width: props.width
	};
}
