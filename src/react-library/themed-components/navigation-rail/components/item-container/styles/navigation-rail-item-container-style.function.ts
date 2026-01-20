import type { CSSProperties } from "react";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";
import type { Orientation } from "@react-library/common";

/**
 * Resolve navigation rail item conainer style based on parameters
 * @param orientation
 * @param isHovered
 */
export function navigationRailItemContainerStyle(orientation: Orientation, isHovered: boolean): CSSProperties {
	return {
		alignItems: "center",
		boxSizing: "border-box",
		cursor: isHovered ? "pointer" : undefined,
		display: "inline-flex",
		flexDirection: "column",
		flexShrink: 0,
		gap: NAVIGATION_RAIL_PROPERTY_MAP.itemContentGap,
		justifyContent: "center",
		paddingBottom: NAVIGATION_RAIL_PROPERTY_MAP.orientation[orientation].itemPaddingBottom,
		textWrap: "nowrap"
	};
}
