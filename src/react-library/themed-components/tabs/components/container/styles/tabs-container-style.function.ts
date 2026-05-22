import type { CSSProperties } from "react";

import { TabsStyle } from "../../../enums/tabs-style.type";

/**
 * Resolve tabs container style
 */
export function tabsContainerStyle(style: TabsStyle): CSSProperties {
	return {
		alignItems: "stretch",
		display: "flex",
		flexDirection: style === TabsStyle.Primary ? "column-reverse" : "column",
		height: "100%",
		overflow: "hidden",
		width: "100%"
	};
};
