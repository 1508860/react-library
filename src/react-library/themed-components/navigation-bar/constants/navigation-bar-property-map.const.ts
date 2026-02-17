import { Orientation } from "@react-library/common";
import type { NavigationBarPropertyMap } from "../types/navigation-bar-property-map.type";

/**
 * Constant values for navigation bar style sizes
 */
export const NAVIGATION_BAR_PROPERTY_MAP: NavigationBarPropertyMap = {
	fontSize: 12,
	gap: 4,
	height: 64,
	iconSize: 24,
	itemPaddingHorizontal: 16,
	orientation: {
		[Orientation.Horizontal]: {
			borderRadius: 20,
			height: 40
		},
		[Orientation.Vertical]: {
			borderRadius: 16,
			height: 32
		}
	}
}
