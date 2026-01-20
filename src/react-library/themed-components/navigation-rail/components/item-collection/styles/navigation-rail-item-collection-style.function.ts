import type { CSSProperties } from "react";

import type { IFont } from "@react-library/common";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";

/**
 * Resolve navigation rail item collection style based on parameters
 * @param orientation
 * @param font
 */
export function navigationRailItemCollectionStyle(centerItems: boolean, font: IFont): CSSProperties {
	return {
		alignItems: "start",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		fontFamily: font.fontFamily,
		fontSize: NAVIGATION_RAIL_PROPERTY_MAP.fontSize,
		justifyContent: centerItems ? "center" : "start"
	};
}
