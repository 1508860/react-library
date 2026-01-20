import { Orientation } from "@react-library/common";
import type { INavigationBarPropertyMap } from "../types/navigation-bar-property-map.type";

/**
 * Constant values for navigation bar style sizes
 */
export const NAVIGATION_BAR_PROPERTY_MAP: INavigationBarPropertyMap = {
	barHeight: 64,
	fontSize: 12,
	gap: 4,
	iconSize: 24,
	itemSidePadding: 16,
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
