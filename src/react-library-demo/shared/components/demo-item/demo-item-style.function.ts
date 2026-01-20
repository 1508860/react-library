import type { CSSProperties } from "react";

import type { IFont } from "@react-library/common";

export function demoItemStyle(): CSSProperties {
	return {
		alignItems: "center",
		display: "flex",
		flexDirection: "column"
	};
}

export function demoItemLabel(font: IFont): CSSProperties {
	return {
		fontFamily: font.fontFamily,
		fontSize: 16,
		fontWeight: "bold",
		paddingTop: 10
	};
}

export function demoItemContent(): CSSProperties {
	return {
		display: "block"
	};
}
