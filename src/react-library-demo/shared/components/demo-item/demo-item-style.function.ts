import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import type { DemoItemProps } from "./demo-item-props.type";

export function demoItemStyle(): CSSProperties {
	return {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	};
}

export function demoItemContent(props: DemoItemProps): CSSProperties {
	return {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: props.height,
		width: props.width
	};
}

export function demoItemLabel(font: Font): CSSProperties {
	return {
		fontFamily: font.fontFamily,
		fontSize: 16,
		fontWeight: "bold",
		paddingTop: 10
	};
}
