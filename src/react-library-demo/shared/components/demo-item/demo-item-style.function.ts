import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import type { DemoItemProps } from "./demo-item-props.type";

export function demoItemStyle(font: Font): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: "inherit",
		display: "flex",
		flexDirection: "column",
		fontFamily: font.fontFamily,
		justifyContent: "center"
	};
}

export function demoItemContent(props: DemoItemProps): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: "inherit",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: props.height,
		width: props.width
	};
}

export function demoItemLabel(): CSSProperties {
	return {
		fontSize: 16,
		fontWeight: "bold",
		paddingTop: 10
	};
}
