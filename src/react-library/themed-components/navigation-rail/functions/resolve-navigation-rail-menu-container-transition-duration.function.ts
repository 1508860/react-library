import type { SizePx } from "@react-library/common";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../constants/navigation-rail-property-map.const";

/**
 * Resolve the menu transition duration based on the rate per (x)px and the actual size of the menu
 * @param expandedMenuWidth
 * @param collapsedMenuWidth
 */
export function resolveNavigationRailMenuContainerTransitionDuration(expandedMenuWidth: SizePx, collapsedMenuWidth: SizePx): number {
	return ((expandedMenuWidth - collapsedMenuWidth) / 100) * NAVIGATION_RAIL_PROPERTY_MAP.menuTransitionPer100PxDurationMs;
}
