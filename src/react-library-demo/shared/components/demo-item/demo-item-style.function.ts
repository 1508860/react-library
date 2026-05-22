import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import type { DemoItemProps } from "./demo-item-props.type";

export function demoItemStyle(props: DemoItemProps, font: Font): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: "inherit",
		display: "flex",
		flexDirection: "column",
		fontFamily: font.fontFamily,
		height: props.height,
		justifyContent: "start",
		userSelect: "none",
		width: props.width
	};
}

export function demoItemContent(): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: "inherit",
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		justifyContent: "center",
		width: "100%"
	};
}

export function demoItemLabel(): CSSProperties {
	return {
		fontSize: 16,
		fontWeight: "bold",
		paddingTop: 10,
		userSelect: "none"
	};
}
