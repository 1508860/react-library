import type { CSSProperties } from "react";

import type { Size } from "@react-library/common";

import { MENU_PROPERTY_MAP } from "../../../constants/menu-property-map.const";

/**
 * Resolve menu container style based on parameters
 * @param width
 */
export function menuContainerStyle(width: Size | undefined): CSSProperties {
	return {
		alignItems: "stretch",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		gap: MENU_PROPERTY_MAP.container.gap,
		position: "relative",
		width: width
	};
};
