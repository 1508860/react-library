import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import type { DemoSectionProps } from "./demo-section-props.type";

export function demoSectionStyle(): CSSProperties {
	return {
		backgroundColor: "inherit",
		display: "flex",
		flexDirection: "column",
		width: "100%"
	};
}

export function demoSectionTitle(font: Font): CSSProperties {
	return {
		borderBottomColor: "#000000",
		borderBottomStyle: "solid",
		borderBottomWidth: 2,
		fontFamily: font.fontFamily,
		fontSize: 20,
		fontWeight: "bold",
		padding: 20
	};
}

export function demoSectionContent(props: DemoSectionProps): CSSProperties {
	return {
		backgroundColor: "inherit",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 10,
		height: props.contentHeight,
		padding: 20
	};
}
