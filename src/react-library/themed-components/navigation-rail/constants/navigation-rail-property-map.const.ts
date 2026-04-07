import { Orientation, ScaleDegrees } from "@react-library/common";

import { NavigationRailMenuStyle } from "../enums/navigation-rail-menu-style.type";
import type { NavigationRailPropertyMap } from "../types/navigation-rail-property-map.type";

/**
 * Constant values for navigation rail style sizes
 */
export const NAVIGATION_RAIL_PROPERTY_MAP: NavigationRailPropertyMap = {
	expanded: {
		false: {
			menuIconRotate: {
				degrees: ScaleDegrees[0],
				rotationCount: 0
			}
		},
		true: {
			menuIconRotate: {
				degrees: ScaleDegrees[180],
				rotationCount: 0
			}
		}
	},
	fontSize: 12,
	headerContainerWidth: 56,
	immersiveMenuPaddingLeft: 20,
	itemCollectionPaddingVertical: 12,
	itemContentGap: 4,
	itemIconSize: 24,
	itemPaddingHorizontal: 16,
	menuIconMarginHorizontal: 10,
	menuIconPadding: 6,
	menuIconSize: 24,
	menuPaddingHorizontal: 20,
	menuStyle: {
		[NavigationRailMenuStyle.ImmersiveModal]: {
			menuBorderBottomRightRadius: 16,
			menuBorderTopRightRadius: 16,
			menuCollapsedWidth: 0
		},
		[NavigationRailMenuStyle.ImmersiveStandard]: {
			menuBorderBottomRightRadius: 0,
			menuBorderTopRightRadius: 0,
			menuCollapsedWidth: 0
		},
		[NavigationRailMenuStyle.Standard]: {
			menuBorderBottomRightRadius: 0,
			menuBorderTopRightRadius: 0,
			menuCollapsedWidth: 96
		}
	},
	menuTransitionDurationMs: 500,
	orientation: {
		[Orientation.Horizontal]: {
			borderRadius: 28,
			height: 56,
			itemPaddingBottom: 0
		},
		[Orientation.Vertical]: {
			borderRadius: 16,
			height: 32,
			itemPaddingBottom: 6
		}
	}
}
