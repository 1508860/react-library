import type { CSSProperties } from "react";

import { NAVIGATION_BAR_PROPERTY_MAP } from "../../../constants/navigation-bar-property-map.const";

/**
 * Resolve navigation bar item container style based on parameters
 */
export function navigationBarItemContainerStyle(isHovered: boolean): CSSProperties {
	return {
		alignItems: "center",
		cursor: isHovered ? "pointer" : undefined,
		display: "inline-flex",
		flexDirection: "column",
		flexGrow: 1,
		flexShrink: 0,
		gap: NAVIGATION_BAR_PROPERTY_MAP.gap,
		justifyContent: "center"
	};
}
