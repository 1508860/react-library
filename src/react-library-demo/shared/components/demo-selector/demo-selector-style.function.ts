import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

export function demoSelctorStyle(): CSSProperties {
	return {
		display: "flex",
		flexDirection: "row",
		height: "100%",
		width: "100%"
	};
}

export function demoSelectorItemListStyle(): CSSProperties {
	return {
		backgroundColor: "#FFFFFF",
		borderRightColor: "#000000",
		borderRightStyle: "solid",
		borderRightWidth: 1,
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		flexShrink: 0,
		gap: 1,
		height: "100%",
		overflowX: "hidden",
		overflowY: "auto",
		width: 200
	};
}

export function demoSelectorItemStyle(font: Font): CSSProperties {
	return {
		alignContent: "center",
		boxSizing: "border-box",
		display: "block",
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: "1.2em",
		fontWeight: "bold",
		height: 40,
		textAlign: "center",
		width: "100%"
	};
}

export function demoSelectorSubItemStyle(font: Font, isCurrent: boolean): CSSProperties {
	return {
		alignContent: "center",
		backgroundColor: isCurrent ? "#E4E4E4" : undefined,
		borderRadius: 20,
		boxSizing: "border-box",
		display: "block",
		flexShrink: 0,
		fontFamily: font.fontFamily,
		height: 40,
		marginLeft: 10,
		marginRight: 10,
		textAlign: "center"
	};
}

export function demoSelectorContentStyle(): CSSProperties {
	return {
		display: "flex",
		flexBasis: 0,
		flexDirection: "column",
		flexGrow: 1,
		flexShrink: 0,
		height: "100%",
		overflow: "auto",
		width: "100%"
	};
}
