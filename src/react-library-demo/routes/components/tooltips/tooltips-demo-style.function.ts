import type { CSSProperties } from "react";

import { StylePolygon } from "@react-library/common";

export function tooltipsDemoArrowContentStyle(fillLeft: boolean, fillRight: boolean): CSSProperties {

	const clipPath = new StylePolygon(["50% 0%", `${fillRight ? 100 : 50}% 100%`, `${fillLeft ? 0 : 50}% 100%`]);

	return {
		backgroundColor: "black",
		height: 60,
		width: 60,
		clipPath: clipPath.toStylePolygonString()
	}
}
